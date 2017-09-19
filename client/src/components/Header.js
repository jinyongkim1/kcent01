import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import '../css/style.css';

// only requirement for the keys: that they're unique and they're consistant
// between renders (but these get rendered only once)
class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <Link to="/login">Login</Link>
            //<a href="/auth/google">Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{margin:"0 10px"}}>Credits: {this.props.auth.credits}</li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? "/ads" : "/"} className="brand-logo">
            INKET
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

// call entire state object inside the react store.
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
