import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Home />
      </div>
    </div>
  );
}

export default App;
