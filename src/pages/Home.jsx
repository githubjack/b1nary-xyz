import * as React  from 'react';
import '../styles.css';

const Home = () => {
    return(
      <>
      <div className="header">
        <header className="home-header">
          <h1 className="h1">This is the Home Page</h1>
        </header>
      </div>

      <div className="main">
        <p className="p">This is the main content of the Home Page</p>
      </div>

      <div className="footer"><h2>Footer</h2></div>
      <div className="reachable"><h2>Social Media</h2></div>
      </>

    );
}

export default Home;