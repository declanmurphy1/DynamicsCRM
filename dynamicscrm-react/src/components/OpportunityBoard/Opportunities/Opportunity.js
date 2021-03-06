import React, { Component } from "react";
import { Link } from "react-router-dom";
import {deleteOpportunity} from "../../../actions/backlogActions"
import PropTypes from "prop-types";
import {connect} from "react-redux";

class Opportunity extends Component {

  onDeleteClick(backlog_id, opp_id){
    this.props.deleteOpportunity(backlog_id, opp_id)
  }

  render() {
    const { opportunity } = this.props;

    var d = new Date(opportunity.closeDate);

    let outcomeClass;

    if (opportunity.outcome === 4) {
      outcomeClass = "bg-danger text-light";
    }

    if (opportunity.outcome === 3) {
      outcomeClass = "bg-secondary text-light";
    }

    if (opportunity.outcome === 2) {
      outcomeClass = "bg-success text-light";
    }

    let departmentString;

    if (opportunity.department === "TECH") {
      departmentString = "Technology Consulting";
    }

    if (opportunity.department === "CYBER") {
      departmentString = "Cyber Security";
    }

    if (opportunity.department === "DATA_ANALYTICS") {
      departmentString = "Data & Analytics";
    }

    if (opportunity.department === "PROJECT") {
      departmentString = "Project Management";
    }

    return (
      <div className="card mb-1 bg-light">
        <div className={`card-header text-primary ${outcomeClass}`}>
          Opp ID: {opportunity.clientSequence} || Department: {departmentString}
        </div>
        <div className="card-body bg-light">
          <h4 className="card-title">{opportunity.oppName}</h4>
          <p className="card-text text-truncate ">{opportunity.description}</p>
          <h6 className="card-title">
            <u>Close Date:</u>
          </h6>
          <h6 className="card-title">
            {d.getDate() + 1 + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()}
          </h6>
          <h6 className="card-title">
            <u>Opportunity Value:</u>
          </h6>
          <h6 className="card-title">€{opportunity.oppValue}</h6>

          <Link to={`/updateOpportunity/${opportunity.clientIdentifier}/${opportunity.clientSequence}`} className="btn btn-primary">
            View / Update
          </Link>

          <button className="btn btn-danger ml-4" onClick={this.onDeleteClick.bind(this, opportunity.clientIdentifier, opportunity.clientSequence)}>Delete</button>
        </div>
      </div>
    );
  }
}


Opportunity.propTypes = {
  deleteOpportunity: PropTypes.func.isRequired
};

export default connect(null, {deleteOpportunity})(Opportunity);
