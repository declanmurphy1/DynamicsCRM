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
import UpdateOpportunity from "./components/OpportunityBoard/Opportunities/UpdateOpportunity";
import ContactBoard from "./components/ContactBoard/ContactBoard";
import AddContact from "./components/ContactBoard/Contact/AddContact";
import UpdateContact from "./components/ContactBoard/Contact/UpdateContact";


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
          <Route exact path="/updateOpportunity/:backlog_id/:opp_id" component={UpdateOpportunity}/>
          <Route exact path="/contactBoard/:id" component={ContactBoard}/>
          <Route exact path="/addContact/:id" component={AddContact}/>
          <Route exact path="/updateContact/:contact_id/:client_id" component={UpdateContact}/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
