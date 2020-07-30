import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
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
    this.state = {
      authUser: null,
    };
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
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Header isUser={this.state.authUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route
            exact
            path="/sign-in"
            isUser={this.state.authUser}
            component={SingInAndSignUp}
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => {
      dispatch(currentUser(user));
    },
  };
};
const  WITHROUTERAPP=withRouter(App)
export default connect(mapStateToProps, mapDispatchToProps)(WITHROUTERAPP);
