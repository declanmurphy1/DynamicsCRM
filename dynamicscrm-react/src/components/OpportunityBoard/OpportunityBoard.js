import React, { Component } from "react";
import { Link } from "react-router-dom";
import Backlog from "./Backlog";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from "../../actions/backlogActions";

class OpportunityBoard extends Component {

  // constructor to handle errors

  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.getBacklog(id);
  }


  render() {
    const { id } = this.props.match.params;
    const {opportunities} = this.props.backlog;
    return (
      <div className="container-fluid">
        <Link to={`/addOpportunity/${id}`} className="btn btn-primary mb-3">
          <i className="fas fa-plus-circle"> Create Opportunity</i>
        </Link>
        <br />
        <hr />
        <Backlog opportunities_prop={opportunities}/>
      </div>
    );
  }
}

OpportunityBoard.propTypes = {
  backlog: PropTypes.object.isRequired,
  getBacklog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  backlog: state.backlog,
});

export default connect(mapStateToProps, { getBacklog })(OpportunityBoard);
