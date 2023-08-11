import * as React from 'react';
import '../styles.css';


const HomePageHeader = () => {
  <div className="header">
  <header className="home-header">
    <h1 className="h1">This is the Home Page test</h1>
  </header>
</div>
}

const Footer = () => {
<div className="footer">
  <h2>Footer</h2>
</div>
}
const Reachable = () =>{
  <div className="reachable">
    <h2>Social Media</h2>
    </div> 
  }
const Home = () => {
  return (
    <>
    <HomePageHeader />
      <div className="main">
        <div>
          <h1 className="bold-type">full stack developer</h1>
          </div>
      </div>
      <Footer />
      <Reachable />

    </>

  );
}

export default Home;