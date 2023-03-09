import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        {/* Render the page here */}
      </div>
    </div>
  );
}

export default App;
