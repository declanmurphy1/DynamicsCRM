import React, { Component } from "react";
import {Link} from "react-router-dom";

class OpportunityBoard extends Component {
  render() {
    const {id} = this.props.match.params;
    return (
      <div className="container-fluid">
        <Link to={`/addOpportunity/${id}`} className="btn btn-primary mb-3">
          <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        <hr />

        {
          // <!-- Backlog STARTS HERE -->
        }

        <div className="row">
          <div className="col-md-3">
            <div className="card text-center mb-2">
              <div className="card-header bg-info text-white">
                <h3>Identifying Needs</h3>
              </div>
            </div>
            {
              //   <!-- SAMPLE PROJECT TASK STARTS HERE -->
            }
            <div className="card mb-1 bg-light">
              <div className="card-header text-primary">
                ID: projectSequence -- Priority: priorityString
              </div>
              <div className="card-body bg-light">
                <h5 className="card-title">project_task.summary</h5>
                <p className="card-text text-truncate ">
                  project_task.acceptanceCriteria
                </p>
                <a href="" className="btn btn-primary">
                  View / Update
                </a>

                <button className="btn btn-danger ml-4">Delete</button>
              </div>
            </div>
            {
              //  <!-- SAMPLE PROJECT TASK ENDS HERE -->
            }
          </div>
          <div className="col-md-3">
            <div className="card text-center mb-2">
              <div className="card-header bg-info text-white">
                <h3>Proposing</h3>
              </div>
            </div>
            {
              //<!-- SAMPLE PROJECT TASK STARTS HERE -->
              // <!-- SAMPLE PROJECT TASK ENDS HERE -->
            }
          </div>
          <div className="col-md-3">
            <div className="card text-center mb-2">
              <div className="card-header bg-info text-white">
                <h3>Negotiating</h3>
              </div>
            </div>

            {
              //<!-- SAMPLE PROJECT TASK STARTS HERE -->
              // <!-- SAMPLE PROJECT TASK ENDS HERE -->
            }
          </div>
          <div className="col-md-3">
            <div className="card text-center mb-2">
              <div className="card-header bg-info text-white">
                <h3>Closed</h3>
              </div>
            </div>

            {
              //<!-- SAMPLE PROJECT TASK STARTS HERE -->
              // <!-- SAMPLE PROJECT TASK ENDS HERE -->
            }
          </div>
        </div>
      </div>
    );
  }
}

export default OpportunityBoard;
