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
          <Link to='/sns-ranking' className="nav-item">SNS RANKING</Link>
          <Link to='/influencer' className="nav-item">INFLUENCERS</Link>
          <Link to='/inquiries' className="nav-item">문의하기</Link>
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
