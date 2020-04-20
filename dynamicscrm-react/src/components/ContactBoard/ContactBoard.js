import React, { Component } from "react";
import { getContacts } from "../../actions/contactActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CreateContactButton from "./Contact/CreateContactButton";
import ContactItem from "./Contact/ContactItem";

class ContactBoard extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContacts(id);
  }

  render() {
    const { contacts } = this.props.contact;
    return (
        <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Contacts</h1>
              <br />
              <CreateContactButton />
              <br />
              <hr />

              {contacts.map(contact=> (
                <ContactItem key={contact.id} contact={contact}/>
              ))
              }

            </div>
          </div>
        </div>
      </div>
    );
  }
}

ContactBoard.propTypes = {
  contact: PropTypes.object.isRequired,
  getContacts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contact: state.contact,
});

export default connect(mapStateToProps, { getContacts })(ContactBoard);
