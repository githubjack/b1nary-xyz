import * as React from 'react';
// import ReactHead from './head.svg';
import { ReactComponent as ReactHead } from './head.svg';
import '../styles.css';

const Home = () => {
  return (
    <>
      <div className="header">
        <header className="home-header">
          <h1 className="h1">This is the Home Page test</h1>
        </header>
      </div>

      <div className="main">
        <p className="p">This is the main content of the Home Page</p>
        {/* <img style={[width: "200px" ]} src={ReactHead} alt="React Logo" /> */}
        <ReactHead />

        <svg
          viewBox="0 0 24 24"
          xmlns="<http://www.w3.org/2000/svg>"
        >
          <circle
            cx="12" cy="12" r="8"
            strokeWidth="4" stroke="tomato"
            fill="none"
          />
        </svg>

      </div>

      <div className="footer"><h2>Footer</h2></div>
      <div className="reachable"><h2>Social Media</h2></div>

    </>

  );
}

export default Home;