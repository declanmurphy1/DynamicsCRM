import React, { Component } from "react";
import ClientItem from "./Client/ClientItem";
import CreateClientButton from "./Client/CreateClientButton";
import { connect } from "react-redux";
import { getClients} from "../actions/clientActions";
import PropTypes from "prop-types";

class Dashboard extends Component {

  componentDidMount() {
    this.props.getClients();
  }

  render() {
    const {clients} = this.props.client
    
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Clients</h1>
              <br />
              <CreateClientButton />
              <br />
              <hr />

              {clients.map(client=> (
                <ClientItem key={client.id} client={client}/>
              ))
              }

            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  client: PropTypes.object.isRequired,
  getClients: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
  client:state.client,

})

export default connect(mapStateToProps, {getClients})(Dashboard);
