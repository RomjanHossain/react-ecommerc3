import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.components";
import ShopList from "./pages/shop/shop.compo";
import Header from "./components/header/header.components";
import { auth, createUserProfilre } from "../src/firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

import SignInandSignUp from "./pages/signInandSignUp/signInandSignUp.components";

class App extends React.Component {
  unSubscribeFirebase = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFirebase = auth.onAuthStateChanged(async (userAuth) => {
      this.setState({ currentUser: userAuth });

      if (userAuth) {
        const userRef = await createUserProfilre(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
          console.log(this.state);
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unSubscribeFirebase();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact component={Homepage} path="/" />
          <Route component={ShopList} path="/shop" />
          <Route component={SignInandSignUp} path="/sign" />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
