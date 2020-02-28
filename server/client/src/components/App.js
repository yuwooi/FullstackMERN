import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/surveys/new' component={SurveyNew} />
            <Route path='/surveys' component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
