import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth, createUserProfile } from "./firebase/firebase.utils";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };
  }
  isUser = () => {
    auth.onAuthStateChanged(async (user) => {
      // setUser(user);
      if (user) {
        const userRef = await createUserProfile(user);
        userRef.onSnapshot((snapShot) => {
          console.log(snapShot);
        });
      }
      this.setState({
        authUser: user,
      });
      // if (this.state.authUser) {
      //   this.props.history.replace("/shop");
      // }
      // await createUserProfile(user);
      // console.log(user);
      // localStorage.setItem('user',JSON.stringify(user))
    });
  };
  componentDidMount() {
    this.isUser();
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
export default withRouter(App);
