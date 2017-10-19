import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from "./Header/Header";
import Landing from './Landing';
import Dashboard from './Dashboard';
import AdNew from './ads/AdNew';
import SocialHeader from './Header/SocialHeader';
import LogoHeader from './Header/LogoHeader';
import Ranking from './Ranking';
import Login from './Login';
import AdLogin from './AdLogin';
import Signup from './Signup';
import Inquiries from './Inquiries';
import Influencer from './Influencer'
import 'semantic-ui-css/semantic.min.css';
import Footer from './Footer';
import CustomerList from './CustomerList';



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
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/ads" component={Dashboard} />
              <Route exact path="/sns-ranking" component={Ranking} />
              <Route exact path="/ads/new" component={AdNew} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/adlogin' component={AdLogin} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/inquiries' component={Inquiries} />
              <Route exact path='/influencer' component={Influencer} />
              <Route exact path='/customerlist' component={CustomerList} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
