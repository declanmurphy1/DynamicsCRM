import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createClient } from "../../actions/clientActions";
import classnames from "classnames";

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
      errors:{}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors:nextProps.errors });
    }
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

    this.props.createClient(newClient, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="client">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Create Client Form</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg",{
                        "is-invalid":errors.clientName
                      })}
                      placeholder="Client Name"
                      name="clientName"
                      value={this.state.clientName}
                      onChange={this.onChange}
                    />
                    {errors.clientName && (
                      <div className="invalid-feedback">{errors.clientName}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg",{
                        "is-invalid":errors.clientIdentifier
                      })}
                      placeholder="Unique Client ID"
                      name="clientIdentifier"
                      value={this.state.clientIdentifier}
                      onChange={this.onChange}
                    />
                    {errors.clientIdentifier && (
                      <div className="invalid-feedback">{errors.clientIdentifier}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg",{
                        "is-invalid":errors.owner
                      })}
                      placeholder="Client Owner"
                      name="owner"
                      value={this.state.owner}
                      onChange={this.onChange}
                    />
                    {errors.owner && (
                      <div className="invalid-feedback">{errors.owner}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg",{
                        "is-invalid":errors.industry
                      })}
                      placeholder="Industry"
                      name="industry"
                      value={this.state.industry}
                      onChange={this.onChange}
                    />
                    {errors.industry && (
                      <div className="invalid-feedback">{errors.industry}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <textarea
                    className={classnames("form-control form-control-lg",{
                      "is-invalid":errors.description
                    })}
                      placeholder="Client Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                    ></textarea>
                    {errors.description && (
                      <div className="invalid-feedback">{errors.description}</div>
                    )}
                  </div>
                  <h6>Address</h6>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg",{
                        "is-invalid":errors.addressLine1
                      })}
                      placeholder="Line 1"
                      name="addressLine1"
                      value={this.state.addressLine1}
                      onChange={this.onChange}
                    />
                    {errors.addressLine1 && (
                      <div className="invalid-feedback">{errors.addressLine1}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg",{
                        "is-invalid":errors.addressLine2
                      })}
                      placeholder="Line 2"
                      name="addressLine2"
                      value={this.state.addressLine2}
                      onChange={this.onChange}
                    />
                    {errors.addressLine2 && (
                      <div className="invalid-feedback">{errors.addressLine2}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg",{
                        "is-invalid":errors.county
                      })}
                      placeholder="County"
                      name="county"
                      value={this.state.county}
                      onChange={this.onChange}
                    />
                    {errors.county && (
                      <div className="invalid-feedback">{errors.county}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg",{
                        "is-invalid":errors.country
                      })}
                      placeholder="Country"
                      name="country"
                      value={this.state.country}
                      onChange={this.onChange}
                    />
                    {errors.country && (
                      <div className="invalid-feedback">{errors.country}</div>
                    )}
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
      </div>
    );
  }
}

AddClient.propTypes = {
  createClient: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { createClient })(AddClient);
