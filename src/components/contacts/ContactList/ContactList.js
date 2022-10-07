import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

const ContactList = () => {
  const [state, setState] = useState([]);

  function fetchContactHandler() {
    fetch("http://stack-api-server.herokuapp.com/docs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformeContact = data.results.map((contactData) => {
          return {
            id: contactData.contact.id,
            title: contactData.title,
          };
        });
        setState(transformeContact);
      });
  }

  async function AddContactHandler(contact) {
    const response = await fetch(
      "http://stack-api-server.herokuapp.com/docs#/Contact/GetContacts_contact__get",
      {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
  }

  return (
    <Fragment>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">
                  Contact manager
                  <Link to={"/contacts/add"} className="btn btn-primary ms-2">
                    <i className="fa fa-plus-circle me-2" />
                    New
                  </Link>
                </p>
                <p className="fst-italic"> you can search here!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Names"
                      />
                    </div>
                  </div>

                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-list">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center d-flex justify-content-around">
                    <div className="col-md-4">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt=""
                        className="contact-img"
                      ></img>
                    </div>
                    <div className="col-md-7">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                          Name : <span className="fw-bold">Shukrani</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Mobile : <span className="fw-bold">67157670</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Email :{" "}
                          <span className="fw-bold">Shukrani@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-1 d-flex flex-column align-items-center">
                      <Link
                        to={`/contacts/view/:contactId`}
                        className="btn btn-warning my-1"
                      >
                        <i className="fa fa-eye" />
                      </Link>
                      <Link
                        to={`/contacts/view/:contactId`}
                        className="btn btn-primary my-1"
                      >
                        <i className="fa fa-pen" />
                      </Link>
                      <button
                        onClick={fetchContactHandler}
                        className="btn btn-danger my-1"
                      >
                        <i className="fa fa-trash" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ContactList;
