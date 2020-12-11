import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.componet";

function App() {
  return (
    <div>
      <Route>
        <Route exact path="/" component={HomePage} />
      </Route>
    </div>
  );
}

export default App;
