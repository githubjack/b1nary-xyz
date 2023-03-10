import * as React  from 'react';
import { Link } from 'react-router-dom'
import '../styles.css';

const Profile = () => {
    return(
        <div className="page">
        <nav className="nav-container">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <h1 className="h1">This is the Profile Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
          risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
          nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
          lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
        </p>
      </div>
    );
}



export default Profile;