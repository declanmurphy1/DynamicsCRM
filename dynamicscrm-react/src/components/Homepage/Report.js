import React, { Component } from "react";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import { getClientNames, getOpenOpps } from "../../actions/dashboardActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";

const Plot = createPlotlyComponent(Plotly);

class Report extends Component {
  constructor() {
    super();

    this.state = {
      pieData: [],
      oppBarData: [],
      valueByClientData: [],
      outcomeByClientData: [],
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8080/api/dashboard/pieChart`)
      .then((x) => {
        console.log(x);
        this.setState({
          pieData: x.data,
        });
      })
      .catch((x) => {
        console.log("The retrieval has failed");
      });

    axios
      .get(`http://localhost:8080/api/dashboard/oppsByClient`)
      .then((x) => {
        console.log(x);
        this.setState({
          oppBarData: x.data,
        });
      })
      .catch((x) => {
        console.log("The retrieval has failed");
      });

      axios
      .get(`http://localhost:8080/api/dashboard/valueByClient`)
      .then((x) => {
        console.log(x);
        this.setState({
          valueByClientData: x.data,
        });
      })
      .catch((x) => {
        console.log("The retrieval has failed");
      });

      axios
      .get(`http://localhost:8080/api/dashboard/outcomeByClient`)
      .then((x) => {
        console.log(x);
        this.setState({
          outcomeByClientData: x.data,
        });
      })
      .catch((x) => {
        console.log("The retrieval has failed");
      });
  }
  render() {
    var oppVal = this.state.data.map((val, i) => {
      return val.oppValue;
    });

    var oppNam = this.state.data.map((val, i) => {
      return val.stage;
    });

    var oppStage = this.state.pieData.map((val, i) => {
      return val.stage;
    });

    var oppCount = this.state.pieData.map((val, i) => {
      return val.count;
    });

    var clientNames = this.state.oppBarData.map((val, i) => {
        return val.stage;
      });

      var clientOppCount = this.state.oppBarData.map((val, i) => {
        return val.count;
      });

      var clientNames2 = this.state.valueByClientData.map((val, i) => {
        return val.stage;
      });

      var valueByClient = this.state.valueByClientData.map((val, i) => {
        return val.count;
      });

      var clientNames3 = this.state.outcomeByClientData.map((val, i) => {
        return val.name;
      });

      var won = this.state.outcomeByClientData.map((val, i) => {
        return val.won;
      });

      var lost = this.state.outcomeByClientData.map((val, i) => {
        return val.lost;
      });

      var withdrawn = this.state.outcomeByClientData.map((val, i) => {
        return val.withdrawn;
      });

      

      var trace1 = {
        x: clientNames3,
        y: won,
        name: 'Won',
        type: 'bar',
        marker: {
          color: 'green'}
          
      };
      
      var trace2 = {
        x: clientNames3,
        y: lost,
        name: 'Lost',
        type: 'bar',
        marker: {
          color: 'red'}
      };

      var trace3 = {
        x: clientNames3,
        y: withdrawn,
        name: 'Withdrawn',
        type: 'bar',
        marker: {
          color: 'orange'}
      };




    

    return (
      <div className="dashboardcontainer">
        <h2>Dynamics Dashboard</h2>
        <div className="row">
        <div className="col-md-2"></div>
          <div className="chart col-md-4">
            <Plot
              data={[
                {
                  x: clientNames,
                  y: clientOppCount,
                  type: "bar",
                  name: "Data Testing",
                },
              ]}
              layout={ {width: 500, height: 500, title: 'Open Opportunities by Client'} }
            />
          </div>
          <div className="chart col-md-4">
          <Plot
              data={[
                {
                  x: clientNames2,
                  y: valueByClient,
                  type: "bar",
                  name: "Data Testing",
                },
              ]}
              layout={ {width: 500, height: 500, title: 'Open Opportunity Value by Client'} }
            />
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
        <div className="col-md-2"></div>
          <div className="chart col-md-4">
          <Plot
              data={[
                {
                  type: "pie",
                  values: oppCount,
                  labels: oppStage,
                  textinfo: "label+value",
                  textposition: "outside",
                  hole: 0.4,
                },
              ]}
              layout={ {width: 500, height: 500, title: 'Open Opportunities by Stage'} }
            />
          </div>
          <div className="chart col-md-4">
            <Plot
              data={[
                
                  trace1, trace2, trace3
                
              ]}
              layout={ {barmode: 'stack',width: 500, height: 500, title: 'Opportunity Outcomes by Client'} }
            />
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default Report;
