import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import {
  auth,
  createUserProfile,
  addCollectionAndDocument,
} from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { currentUser } from "./redux/actions";
import Checkout from "./pages/checkout/checkout.component";
import Category from "./pages/category/category.component";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.items = this.props.collection;
    console.log(this.items);
  }
  isUser = () => {
    auth.onAuthStateChanged(async (user) => {
      // console.log(user);
      if (user) {
        const userRef = await createUserProfile(user);
        console.log(userRef.if.path.segments[1]);
        userRef.onSnapshot( async(snapShot) => {
        const uid = await userRef.if.path.segments[1];
        // const uid = snapShot.ua.path.segments[1];
        // console.log(snapShot);
        this.props.setCurrentUser(uid);
        });
      }
      this.props.setCurrentUser(user);
    });
  };

  getCollection = () =>
    addCollectionAndDocument(
      "collections",
      this.props.collection.map(({ items, title }) => ({ items, title }))
    );
  componentDidMount() {
    this.isUser();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/:categoryId" component={Category} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/sign-in"
            render={(props) =>
              this.props.user ? (
                <Redirect to="/" />
              ) : (
                <SingInAndSignUp {...props} />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    collection: state.shop,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => {
      dispatch(currentUser(user));
    },
  };
};
const WITHROUTERAPP = withRouter(App);
export default connect(mapStateToProps, mapDispatchToProps)(WITHROUTERAPP);
