import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";
import { getContact, addContact } from "../../../actions/contactActions";

class UpdateContact extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      phone: "",
      notes: "",
      clientIdentifier: "",
      create_At: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { contact_id, client_id } = this.props.match.params;
    this.props.getContact(contact_id, client_id, this.props.history);
  }

  componentWillReceiveProps(nextProps) {

    if(nextProps.errors){
        this.setState({errors: nextProps.errors})
    }


    const {
        id,
        firstName,
        lastName,
        jobTitle,
        email,
        phone,
        notes,
        clientIdentifier,
        create_At,
    } = nextProps.contact;

    this.setState({
        id,
        firstName,
        lastName,
        jobTitle,
        email,
        phone,
        notes,
        clientIdentifier,
        create_At,
    });
  }

  onChange(e) {
    this.setState({[e.target.name]:e.target.value})
}

onSubmit(e){
    e.preventDefault()


    const updatedContact = {
        id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      jobTitle: this.state.jobTitle,
      email: this.state.email,
      phone: this.state.phone,
      notes: this.state.notes,
      clientIdentifier: this.state.clientIdentifier,
      create_At: this.state.create_At,
    }


    this.props.addContact(this.state.clientIdentifier, updatedContact, this.props.history)
  }


  render() {

    const {errors} = this.state;
    return (
        <div className="add-PBI">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to={`/contactBoard/${this.state.clientIdentifier}`} className="btn btn-light">
                Back to Contacts
              </Link>
              <h4 className="display-4 text-center">Update Contact</h4>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                <h6>First Name:</h6>
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.firstName,
                    })}
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.onChange}
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
                </div>
                <div className="form-group">
                <h6>Last Name:</h6>
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.lastName,
                    })}
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.onChange}
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}
                </div>
                <div className="form-group">
                <h6>Job Title:</h6>
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.jobTitle,
                    })}
                    name="jobTitle"
                    placeholder="Job Title"
                    value={this.state.jobTitle}
                    onChange={this.onChange}
                  />
                  {errors.jobTitle && (
                    <div className="invalid-feedback">{errors.jobTitle}</div>
                  )}
                </div>
                <div className="form-group">
                <h6>Email:</h6>
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.email,
                    })}
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                <h6>Phone Number:</h6>
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.phone,
                    })}
                    name="phone"
                    placeholder="Phone Number"
                    value={this.state.phone}
                    onChange={this.onChange}
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>



                <h6>Notes:</h6>
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Notes"
                    name="notes"
                    value={this.state.notes}
                    onChange={this.onChange}
                  ></textarea>
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


UpdateContact.propTypes = {
    getContact: PropTypes.func.isRequired,
    contact: PropTypes.object.isRequired,
    addContact: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    contact: state.contact.contact,
    errors: state.errors
  });
  
  export default connect(mapStateToProps, { getContact, addContact })(UpdateContact);
