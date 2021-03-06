import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import { addOpportunity } from "../../../actions/backlogActions";
import PropTypes from "prop-types";

class AddOpportunity extends Component {
  constructor(props) {
    super(props);

    const { id } = this.props.match.params;

    this.state = {
      oppName: "",
      description: "",
      stage: "",
      outcome: 0,
      closeDate: "",
      owner: "",
      department: "",
      oppValue: 0,
      clientIdentifier: id,
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newOpp = {
      oppName: this.state.oppName,
      description: this.state.description,
      stage: this.state.stage,
      outcome: this.state.outcome,
      closeDate: this.state.closeDate,
      owner: this.state.owner,
      department: this.state.department,
      oppValue: this.state.oppValue,
    };

    this.props.addOpportunity(
      this.state.clientIdentifier,
      newOpp,
      this.props.history
    );
  }

  render() {
    const { id } = this.props.match.params;
    const { errors } = this.state;
    return (
      <div className="add-PBI">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to={`/opportunityBoard/${id}`} className="btn btn-light">
                Back to Opportunity Board
              </Link>
              <h4 className="display-4 text-center">Create Opportunity</h4>
              <p className="lead text-center">Client Name || {id}</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.oppName,
                    })}
                    name="oppName"
                    placeholder="Opportunity Name"
                    value={this.state.oppName}
                    onChange={this.onChange}
                  />
                  {errors.oppName && (
                    <div className="invalid-feedback">{errors.oppName}</div>
                  )}
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.owner,
                    })}
                    name="owner"
                    placeholder="Opportunity Owner"
                    value={this.state.owner}
                    onChange={this.onChange}
                  />
                  {errors.owner && (
                    <div className="invalid-feedback">{errors.owner}</div>
                  )}
                </div>
                <div className="form-group">
                  <select
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.department,
                    })}
                    name="department"
                    value={this.state.department}
                    onChange={this.onChange}
                  >
                    <option value="">Select Department</option>
                    <option value="TECH">Technology</option>
                    <option value="CYBER">Cyber Security</option>
                    <option value="DATA_ANALYTICS">Data & Analytics</option>
                    <option value="PROJECT">Project Management</option>
                  </select>
                  {errors.department && (
                    <div className="invalid-feedback">{errors.department}</div>
                  )}
                </div>
                <h6>Opportunity Value</h6>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">€</span>
                  </div>
                  <input
                    type="number"
                    name="oppValue"
                    className="form-control"
                    aria-label="Amount (to the nearest Euro)"
                    placeholder="Value"
                    min="0"
                    value={this.state.oppValue}
                    onChange={this.onChange}
                  />
                </div>
                <h6>Close Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.closeDate,
                    })}
                    name="closeDate"
                    value={this.state.closeDate}
                    onChange={this.onChange}
                  />
                  {errors.closeDate && (
                    <div className="invalid-feedback">{errors.closeDate}</div>
                  )}
                </div>
                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="stage"
                    value={this.state.stage}
                    onChange={this.onChange}
                  >
                    <option value="">Select Stage</option>
                    <option value="IDENTIFYING">Identifying Needs</option>
                    <option value="PROPOSING">Proposing</option>
                    <option value="NEGOTIATING">Negotiating</option>
                    <option value="CLOSED">Closed</option>
                  </select>
                </div>
                <h6>Outcome</h6>
                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    name="outcome"
                    value={this.state.outcome}
                    onChange={this.onChange}
                  >
                    <option value={0}>Select Outcome</option>
                    <option value={1}>In Progress</option>
                    <option value={2}>Won</option>
                    <option value={3}>Withdrawn</option>
                    <option value={4}>Lost</option>
                  </select>
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddOpportunity.propTypes = {
  addOpportunity: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { addOpportunity })(AddOpportunity);
