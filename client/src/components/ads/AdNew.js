// AdNew shows AdForm and AdFormReview
import React, { Component } from "react";
import { reduxForm } from 'redux-form';
import AdForm from "./AdForm";
import AdFormReview from "./AdFormReview";

class AdNew extends Component {
  // using babel-plguin in create-react-app to initialize state in a different fashion
  // this is the same as initializing with constructor and super(props).
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
          <AdFormReview
            onCancel={() => this.setState({ showFormReview: false })}
            />
      );
    }
    return <AdForm onAdSubmit={() => this.setState({ showFormReview: true})}/>;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'AdForm'
})(AdNew);
