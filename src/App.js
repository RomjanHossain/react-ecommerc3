import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.components";
import ShopList from "./pages/shop/shop.compo";

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <Route exact component={Homepage} path="/" />
      <Route component={ShopList} path="/shop" />
    </div>
  );
}

export default App;
