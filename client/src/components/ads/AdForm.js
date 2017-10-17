import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import AdField from "./AdField";
import validateEmails from '../../utils/validateEmails'
import formFields from './formFields';
import { Button, Container } from 'semantic-ui-react';

class AdForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={AdField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    return (
      <Container>
        <form onSubmit={this.props.handleSubmit(this.props.onAdSubmit)}>
          {this.renderFields()}
          <Link to="/ads" className="red btn-flat white-text">Cancel</Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next <i className="material-icons right">done</i>
          </button>
        </form>
      </Container>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name, noValueError }) => {
    if(!values[name]){
      errors[name] = noValueError;
    }
  });



  return errors;
}


export default reduxForm({
  validate,
  form: "AdForm",
  destroyOnUnmount: false
})(AdForm);
