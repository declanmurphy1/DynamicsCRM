import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddClient from "./components/Client/AddClient";
import { Provider } from "react-redux";
import store from "./store";
import UpdateClient from "./components/Client/UpdateClient";
import OpportunityBoard from "./components/OpportunityBoard/OpportunityBoard";
import AddOpportunity from "./components/OpportunityBoard/Opportunities/AddOpportunity";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addClient" component={AddClient} />
          <Route exact path="/updateClient/:id" component={UpdateClient}/>
          <Route exact path="/opportunityBoard/:id" component={OpportunityBoard}/>
          <Route exact path="/addOpportunity/:id" component={AddOpportunity}/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
