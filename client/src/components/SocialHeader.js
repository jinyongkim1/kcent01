import React, { Component } from "react";



// only requirement for the keys: that they're unique and they're consistant
// between renders (but these get rendered only once)
class SocialHeader extends Component {


  render() {
    return (
      <nav className="z-depth-0">
        <div className="nav-wrapper">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <i className="fa fa-youtube-play" aria-hidden="true"></i>

            <button className="right-navbar">로그인</button>
            <button className="register">회원가입</button>

        </div>
      </nav>
    );
  }
}


export default SocialHeader;
