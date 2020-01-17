import React from "react";
import TypeWriter from "./TypeWriter";
import {Link} from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <TypeWriter> </TypeWriter>
            <p className="lead">
              Create an account and sell your unused items to other MiddKids!
            </p>
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
              <Link to="/login" className="btn btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
