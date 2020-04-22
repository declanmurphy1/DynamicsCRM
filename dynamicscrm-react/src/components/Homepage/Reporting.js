import React, { Component } from "react";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import { getClientNames, getOpenOpps } from "../../actions/dashboardActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";


var test_array = [1, 2, 3, 4, 5, 6];

class Reporting extends Component {
  componentDidMount() {
    this.props.getClientNames();
    this.props.getOpenOpps();
  }

  render() {

    return (
      <div>
        
      </div>
    );
  }
}

Reporting.propTypes = {
  client_names: PropTypes.array.isRequired,
  open_opps: PropTypes.array.isRequired,
  getClientNames: PropTypes.func.isRequired,
  getOpenOpps: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  client_names: state.client_names,
  open_opps: state.open_opps,
});

export default connect(mapStateToProps, { getClientNames, getOpenOpps })(
  Reporting
);
