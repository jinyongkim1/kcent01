import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Login extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <a href="/auth/google">Google</a>
          </div>
        );
      default:
        return [
          <li key="2">
            <a>Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <span>
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-content">
              <p className="center">
                Login
              </p>
            </div>
            <div className="card-action">
              <a href="/register">If you do not have an account, register</a>
            </div>
          </div>
        </div>
      </div>
      </span>
      /*<div>
        <Link to={this.props.auth ? "/ads" : "/"} >
          Login
        </Link>
        <ul className="right">{this.renderContent()}</ul>
      </div>
      */
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Login);
