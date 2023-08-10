import * as React from 'react';
import '../styles.css';


const HomePageHeader = () => {
  <div className="header">
  <header className="home-header">
    <h1 className="h1">This is the Home Page test</h1>
  </header>
</div>
}
const Home = () => {
  return (
    <>
    <HomePageHeader />
      <div className="main">
        <div>Test Div for home page</div>
      </div>

{/*       <div className="footer"><h2>Footer</h2></div>
      <div className="reachable"><h2>Social Media</h2></div> */}

    </>

  );
}

export default Home;