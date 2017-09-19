import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const AdFormReview = ({ onCancel, formValues, submitAd, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5> Please confirm your entries </h5>
      {reviewFields}
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
      <button onClick={() => submitAd(formValues, history)} className="green btn-flat right white-text">
        Send Ad Offer
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.AdForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(AdFormReview));
