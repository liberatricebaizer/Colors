import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

const ViewContact = () => {
  return (
    <Fragment>
      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-bold">View contact</p>
              <p className="fst-italic">View your contact here</p>
            </div>
          </div>
        </div>
      </section>

      <section className="view-contact mt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img
                src="https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"
                alt=""
                className="contact-img"
              ></img>
            </div>
            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                  Name : <span className="fw-bold">Shukrani</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Mobile : <span className="fw-bold">67157670</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Email : <span className="fw-bold">Shukrani@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Company : <span className="fw-bold">Shukrani@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Title : <span className="fw-bold">Shukrani@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Group : <span className="fw-bold">Shukrani@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to={"/contacts/list"} className="btn btn-warning">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ViewContact;
