import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createClient} from "../../actions/clientActions";

class AddClient extends Component {
  constructor() {
    super();

    this.state = {
      clientName: "",
      clientIdentifier: "",
      description: "",
      owner: "",
      addressLine1: "",
      addressLine2: "",
      county: "",
      country: "",
      industry: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newClient = {
      clientName: this.state.clientName,
      clientIdentifier: this.state.clientIdentifier,
      description: this.state.description,
      owner: this.state.owner,
      addressLine1: this.state.addressLine1,
      addressLine2: this.state.addressLine2,
      county: this.state.county,
      country: this.state.country,
      industry: this.state.industry,
    };

    this.props.createClient(newClient, this.props.history)
  }

  render() {
    return (
      <div className="project">
        {
          // project className may need to be changed
        }
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Create Client Form</h5>
              <hr />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Client Name"
                    name="clientName"
                    value={this.state.clientName}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Unique Client ID"
                    name="clientIdentifier"
                    value={this.state.clientIdentifier}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Client Owner"
                    name="owner"
                    value={this.state.owner}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Industry"
                    name="industry"
                    value={this.state.industry}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Client Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  ></textarea>
                </div>
                <h6>Address</h6>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Line 1"
                    name="addressLine1"
                    value={this.state.addressLine1}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Line 2"
                    name="addressLine2"
                    value={this.state.addressLine2}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="County"
                    name="county"
                    value={this.state.county}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Country"
                    name="country"
                    value={this.state.country}
                    onChange={this.onChange}
                  />
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

AddClient.propTypes = {
  createClient : PropTypes.func.isRequired
}


export default connect(null, {createClient}) (AddClient);
