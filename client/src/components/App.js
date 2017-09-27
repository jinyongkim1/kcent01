import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from "./Header";
import Landing from './Landing';
import Dashboard from './Dashboard';
import AdNew from './ads/AdNew';
import SocialHeader from './SocialHeader';
import LogoHeader from './LogoHeader';


class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
        <BrowserRouter>
          <div>
            <SocialHeader/>
            <LogoHeader />
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/ads" component={Dashboard} />
            <Route path="/ads/new" component={AdNew} />
          </div>
        </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
