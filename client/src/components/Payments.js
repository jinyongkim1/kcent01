import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Payments extends Component {
  render() {

    return (
      <StripeCheckout
        name="KCTICS"
        description="$5 for five offers"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="point-add">
          포인트 추가
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
