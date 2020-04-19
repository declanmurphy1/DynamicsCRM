import React, { Component } from "react";
import { Link } from "react-router-dom";
import Backlog from "./Backlog";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from "../../actions/backlogActions";

class OpportunityBoard extends Component {
  // constructor to handle errors


  constructor(){
    super();

    this.state = {
      errors: {}
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBacklog(id);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors:nextProps.errors})
    }
  }


  const 

  render() {
    const { id } = this.props.match.params;
    const { opportunities } = this.props.backlog;
    const {errors} = this.state


    let BoardContent;


const boardAlgorithm = (errors, opportunities) =>{
  if(opportunities.length < 1) {
    if(errors.clientIdentifier){
      return(
        <div className="alert alert-danger text-center" role="slert">
        {errors.clientIdentifier}
        </div>
      )
    } else {
      return <div className="alert alert-info text-center" role="alert">This Client currently has no Opportunities</div>
    }
  } else {
    return <Backlog opportunities_prop={opportunities} />
  }
}


  BoardContent = boardAlgorithm(errors, opportunities);


    return (
      <div className="container-fluid">
        <Link to={`/addOpportunity/${id}`} className="btn btn-primary mb-3">
          <i className="fas fa-plus-circle"> Create Opportunity</i>
        </Link>
        <br />
        <hr />
        {BoardContent}
      </div>
    );
  }
}

OpportunityBoard.propTypes = {
  backlog: PropTypes.object.isRequired,
  getBacklog: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  backlog: state.backlog,
  errors: state.errors
});

export default connect(mapStateToProps, { getBacklog })(OpportunityBoard);
