import React, { useState, useEffect } from "react";
//Styles
import "./App.css";
//Routing
import { Route, useHistory } from "react-router-dom";
//Pages
import HomePage from "./Pages/Home";
import InfoPage from "./Pages/Info";

function App() {
  const history = useHistory();

  useEffect(() => {
    history.push("/home");
  }, []);

  return (
    <div className="App">
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/info">
        <InfoPage />
      </Route>
    </div>
  );
}

export default App;
