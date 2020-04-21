import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {deleteContact} from "../../../actions/contactActions";

class ContactItem extends Component {
  onDeleteClick(contact_id){
    this.props.deleteContact(contact_id)
  }

    render() {
        const {contact} = this.props;
        return (
            <div className="container">
            <div className="card card-body bg-light mb-3">
              <div className="row">
                <div className="col-2">
                  <span className="mx-auto">{contact.clientIdentifier}</span>
                </div>
                <div className="col-lg-6 col-md-4 col-8">
                  <h3>{contact.firstName} {contact.lastName}</h3>
                  <h5>
                    <u>Title:</u>
                  </h5>
                  <p>{contact.jobTitle}</p>
                  <h5>
                    <u>Phone:</u>{" "}
                  </h5>
                  <p>{contact.phone} </p>
                  <h5>
                    <u>Email:</u>
                  </h5>
                  <p>
                    {contact.email}
                  </p>
                </div>
                <div className="col-md-4 d-none d-lg-block">
                  <ul className="list-group">
                    <br />
                    <br />
                    <Link to={`/updateClient/${contact.clientIdentifier}`}>
                      <li className="list-group-item update">
                        <i className="fa fa-edit pr-1"> Update Contact Info</i>
                      </li>
                    </Link>
                    <br />
                    <li
                      className="list-group-item delete"
                      
                    >
                      <i className="fa fa-minus-circle pr-1" onClick={this.onDeleteClick.bind(this, contact.id)}> Delete Contact</i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

ContactItem.propTypes = {
  deleteContact: PropTypes.func.isRequired
}


export default connect(null, {deleteContact})(ContactItem);
