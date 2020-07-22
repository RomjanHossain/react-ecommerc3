import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.components";

const hat = () => (
  <div>
    <h1>Heloaa</h1>
    <h2>there kfsajd sjdf</h2>
  </div>
);

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      <Route exact component={Homepage} path="/" />
      <Route component={hat} path="/shop/hats" />
    </div>
  );
}

export default App;
