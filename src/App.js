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
      <Route component={Homepage} path="/" />
    </div>
  );
}

export default App;
