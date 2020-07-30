import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth, createUserProfile } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { currentUser } from "./redux/actions";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  isUser = () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfile(user);
        userRef.onSnapshot((snapShot) => {
          const uid = snapShot.ua.path.segments[1];
          this.props.setCurrentUser(uid);
        });
      }
      this.props.setCurrentUser(user);
    });
  };
  componentDidMount() {
    this.isUser();
    console.log(this.props.user);
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
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
