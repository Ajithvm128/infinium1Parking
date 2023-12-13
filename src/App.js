import React from "react";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Login from "./screens/LoginPage";
import HomePage from "./screens/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
