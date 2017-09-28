import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// only requirement for the keys: that they're unique and they're consistant
// between renders (but these get rendered only once)
class Header extends Component {
  renderContent() {
    return (
        <li className="main-nav">
          <i className="fa fa-search" aria-hidden="true"></i>
          <Link to={this.props.auth ? "/ads" : "/"} className="nav-title">
            HOME
          </Link>
          <a className="nav-item" href="/sns-ranking">SNS RANKING</a>
          <a className="nav-item" href="/influencer">INFLUENCERS</a>
          <a className="nav-item" href="/inquiries">문의하기</a>
        </li>
    );
  }

  render() {
    return (
      <nav className="z-depth-0">
        <div className="nav-wrapper">

          {this.renderContent()}

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
