import React from "react";
import {Link} from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <h1>
          <Link to="/"> MiddMarketPlace</Link>
        </h1>
        <ul>
          <Link to="/register">Sign Up</Link>
          <Link to="/login">Login</Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
