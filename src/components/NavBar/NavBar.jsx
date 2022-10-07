import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

const NavBar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expend-sm ">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            <i className="fa fa-mobile text-warning" />
            Contact <span className="text-warning">manager</span>
          </Link>
        </div>
      </nav>
    </Fragment>
  );
};
export default NavBar;
