import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./router/router";
import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
