import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.components";
import ShopList from "./pages/shop/shop.compo";
import Header from "./components/header/header.components";
import { auth } from "../src/firebase/firebase.utils";

import SignInandSignUp from "./pages/signInandSignUp/signInandSignUp.components";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unSubscribeFirebase = null;
  componentDidMount() {
    this.unSubscribeFirebase = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unSubscribeFirebase();
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact component={Homepage} path="/" />
          <Route component={ShopList} path="/shop" />
          <Route component={SignInandSignUp} path="/sign" />
        </Switch>
      </div>
    );
  }
}

export default App;
