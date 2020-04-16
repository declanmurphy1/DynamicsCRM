import React, { Component } from "react";
import {Link} from "react-router-dom";

class ClientItem extends Component {
  render() {
    const {client} = this.props;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">{client.clientIdentifier}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{client.clientName}</h3>
              <h5><u>Details:</u></h5>
              <p>{client.description}</p>
              <h5><u>Client Owner:</u> </h5>
              <p>{client.owner} </p>
              <h5><u>Address:</u></h5>
              <p>{client.addressLine1} <br/>
              {client.addressLine2} <br/>
              {client.county} <br/>
              {client.country} <br/>
              </p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <a href="#">
                  <li className="list-group-item board">
                    <i className="fa fa-flag-checkered pr-1">
                      {" "}
                      View Opportunities{" "}
                    </i>
                  </li>
                </a>
                <br/>
                <a href="#">
                  <li className="list-group-item board">
                    <i className="fa fa-flag-checkered pr-1"> View Contacts </i>
                  </li>
                </a>
                <br/>
                <Link to={`/updateClient/${client.clientIdentifier}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1"> Update Client Info</i>
                  </li>
                </Link>
                <br/>
                <a href="">
                  <li className="list-group-item delete">
                    <i className="fa fa-minus-circle pr-1"> Delete Client</i>
                  </li>
                </a>

              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientItem;
