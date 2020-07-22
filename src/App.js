import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.components";
import ShopList from "./pages/shop/shop.compo";
import Header from "./components/header/header.components";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact component={Homepage} path="/" />
        <Route component={ShopList} path="/shop" />
      </Switch>
    </div>
  );
}

export default App;
