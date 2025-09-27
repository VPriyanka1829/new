import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Br from "./images/br.png";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav
      className="navbar navbar-inverse navbar-fixed-top"
      style={{ backgroundColor: "white", color: "black", height: "70px" }}
    >
      <div className="container-fluid">
       <Link to="/"> <a className="navbar-brand" href="#">
          <img
            src={Br}
            alt="br"
            style={{ width: "200px", marginTop: "-40px", marginLeft: "450px" }}
            className="img-responsive"
          />
        </a></Link>

        <div className="nav navbar-nav navbar-right" style={{ margin: "10px", padding: "8px" }}>
          <button
            type="button"
            className="btn navbar-btn"
            style={{ background: "#f20c90", color: "white" }}
            onClick={() => navigate('/about')}
          >
            ABOUT US
          </button>&nbsp;&nbsp;

          <button
            type="button"
            className="btn navbar-btn"
            style={{ background: "#f20c90", color: "white" }}
          >
            REWARDS PROGRAM
          </button>&nbsp;&nbsp;

          <button
            type="button"
            className="btn navbar-btn"
            style={{ background: "#f20c90", color: "white" }}
          >
            ORDER NOW
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
