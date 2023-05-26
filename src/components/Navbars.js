import React from "react";
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <div className="row">
      <ul className="nav nav-tabs nav-bar">
        <li className="nav-item">
          <a className="nav-link">
            <Link to="/">Calendly</Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{ color: "black" }}>
            <Link to="/individuals">Individuals</Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{ color: "black" }}>
            <Link to="/teams">Teams</Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{ color: "black" }}>
            <Link to="enterprise">Enterprise</Link>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbars;
