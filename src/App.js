import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.components";
import ShopList from "./pages/shop/shop.compo";
import Header from "./components/header/header.components";
import { auth, createUserProfilre } from "../src/firebase/firebase.utils";

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
    this.unSubscribeFirebase = auth.onAuthStateChanged(async (userAuth) => {
      this.setState({ currentUser: userAuth });

      if (userAuth) {
        const userRef = await createUserProfilre(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      this.setState({ currentUser: this.state.currentUser });
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
