import React, { Component } from "react";
import { connect } from 'react-redux';

class Header extends Component {
  renderContent(){
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return <li><a>Logout</a></li>;
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">INKET</a>
          <ul className="right">
            {this.renderContent()}
          </ul>
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
