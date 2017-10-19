import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "../Payments";


// only requirement for the keys: that they're unique and they're consistant
// between renders (but these get rendered only once)
class SocialHeader extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
              <Link to="/login" className="right-navbar">로그인</Link>
              <Link to="/signup" className="signup">회원가입</Link>
          </li>
        );
      default:
        return [
              <li className="point-number" key="1" style={{margin:"-5px 30px"}}>포인트: {this.props.auth.credits}</li>,
              <li key="2">
                <Payments />
              </li>,
              <li key="3">
                <form action="/api/logout">
                  <button type="submit" className="right-navbar">로그아웃</button>
                </form>
              </li>
        ];
    }
  }
  render() {
    return (
      <nav className="z-depth-0">
        <div className="nav-wrapper">
            <a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="https://www.instagram.com/kcent_official/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://www.youtube.com/channel/UCsIs43O4WWXiBAPR-pegDvA"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>

            <ul className="main-nav-ul right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

// call entire state object inside the react store.
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(SocialHeader);
