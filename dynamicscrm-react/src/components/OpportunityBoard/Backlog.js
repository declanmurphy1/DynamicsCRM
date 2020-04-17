import React, { Component } from "react";
import { Link } from "react-router-dom";
import Opportunity from "./Opportunities/Opportunity";

class Backlog extends Component {
  render() {
    const { opportunities_prop } = this.props;

    const opps = opportunities_prop.map((opportunity) => (
      <Opportunity key={opportunity.id} opportunity={opportunity} />
    ));

    let identifyingItems = [];
    let proposingItems = [];
    let negotiatingItems = [];
    let closedItems = [];

    for (let i = 0; i < opps.length; i++) {
      if(opps[i].props.opportunity.stage === "IDENTIFYING"){
          identifyingItems.push(opps[i]);
      }
      if(opps[i].props.opportunity.stage === "PROPOSING"){
        proposingItems.push(opps[i]);
    }
    if(opps[i].props.opportunity.stage === "NEGOTIATING"){
        negotiatingItems.push(opps[i]);
    }
    if(opps[i].props.opportunity.stage === "CLOSED"){
        closedItems.push(opps[i]);
    }
    }

    return (
      <div className="row">
        <div className="col-md-3">
          <div className="card text-center mb-2">
            <div className="card-header bg-info text-white">
              <h3>Identifying Needs</h3>
            </div>
          </div>
          {identifyingItems}
          
        </div>
        <div className="col-md-3">
          <div className="card text-center mb-2">
            <div className="card-header bg-info text-white">
              <h3>Proposing</h3>
            </div>
          </div>
          {proposingItems}
        </div>
        <div className="col-md-3">
          <div className="card text-center mb-2">
            <div className="card-header bg-info text-white">
              <h3>Negotiating</h3>
            </div>
          </div>
          {negotiatingItems}
        </div>
        <div className="col-md-3">
          <div className="card text-center mb-2">
            <div className="card-header bg-info text-white">
              <h3>Closed</h3>
            </div>
          </div>
          {closedItems}
        </div>
      </div>
    );
  }
}

export default Backlog;
