import * as React  from 'react';
import { useLocation } from 'react-router-dom';
import '../styles.css';

const Whoops404 = () => {
    let location = useLocation();
    console.log(location);
    return (
      <div className="not-found">
        <h1>Resource not found at {location.pathname}.</h1>
      </div>
    );
  }

  export default Whoops404;