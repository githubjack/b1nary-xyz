// import * as React from "react";
import { Routes, Route } from "react-router-dom";
import React from 'react';

// your JSX code here

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import "./App.css";
import Nav from "./components/nav/Nav";

export function App() {
  // console.log(window.location);
  return (
    <div className="app">
      <Nav />
      <div className="app-data">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
