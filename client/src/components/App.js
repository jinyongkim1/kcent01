import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from "./Header/Header";
import Landing from './Landing';
import Dashboard from './Dashboard';
import AdNew from './ads/AdNew';
import SocialHeader from './Header/SocialHeader';
import LogoHeader from './Header/LogoHeader';
import Ranking from './Ranking';

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
            <Route exact path="/sns-ranking" component={Ranking} />
            <Route exact path="/ads/new" component={AdNew} />
          </div>
        </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
