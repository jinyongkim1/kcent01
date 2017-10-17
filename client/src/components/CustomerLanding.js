import React, { Component } from 'react';
import { Button, Grid, Image, Dimmer } from "semantic-ui-react";
import { Link } from 'react-router-dom';

class CustomerLanding extends Component{

  render(){

  return(
    <section className="customer-landing">
      <Button animated="fade" fluid className="customer-button">
          <Button.Content hidden>
            <Button primary>전체 고객사 보기</Button>
          </Button.Content>
        <Link to='/customerlist'>
        <Button.Content visible>
            <ul className="customer-flex-show">
              <li>
                <img
                  className="customer-brands"
                  alt="naversnow"
                  src="/img/press/snow.png"
                />
              </li>
              <li>
                <img
                  className="customer-brands"
                  alt="cjem"
                  src="/img/press/cjem.png"
                />
              </li>
              <li>
                <img
                  className="customer-brands"
                  alt="sbs"
                  src="/img/press/sbs.png"
                />
              </li>
              <li>
                <img
                  className="customer-brands"
                  alt="bigo-live"
                  src="/img/press/bigo-live.png"
                />
              </li>
              <li>
                <img
                  className="customer-brands"
                  alt="uplive"
                  src="/img/press/uplive.png"
                />
              </li>
            </ul>
        </Button.Content>
        </Link>
      </Button>
    </section>
  );
}
}

export default CustomerLanding;
