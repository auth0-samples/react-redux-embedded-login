import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, ToastMessage } from 'react-toastr';
import { signoutUser } from '../../actions/auth';
import * as actions from '../../actions/forgot';
import * as EmailValidator from 'email-validator';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class ForgotPassword extends Component {

  componentWillMount() {
    this.props.signoutUser();
  }

  componentWillUpdate(nextProps, nextState) {
    const { error } = nextProps;
    if (error) {
      this.container.error(`Password Reset failed: ${error}`, "Error occurred", {
        timeOut: 3000, extendedTimeOut: 4000
      });
      nextProps.cleardown();
    }
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const classNameFormGroup = `form-group ${touched && error ? "has-error" : ""}`;
    const classNameFormControl = `form-control ${touched && error ? "has-error" : ""}`;
    return (
      <div className={classNameFormGroup}>
        <label className="col-xs-3 control-label">{field.label}</label>
        <div className="col-xs-6">
          <input className={classNameFormControl} type="text" {...field.input} />
          <div className="text-help">
            {touched ? error : ""}
          </div>
          </div>
      </div>
    );
  }

  onSubmit(values) {
    const { email } = values;
    this.props.forgotPassword({ email }, () => {
      return this.props.history.push("/");
    });
  }

  getSubmitButton() {
    if (this.props.loading) {
      return (
        <div className="spinner spinner-md is-auth0">
          <div className="circle"></div>
        </div>
      )
    }
    return <button type="submit" className="btn btn-success btn-sm">Submit</button>;
  }

  getCancelButton() {
    if (!this.props.loading) {
      return <Link to="/" className="btn btn-primary btn-sm">Cancel</Link>;
    }
  }

  render() {

    const { handleSubmit } = this.props;

    return (

      <div ref="container">

        <section className="jumbotron">
          <h1>Forgot Password</h1>
          <div className="circle-logo" data-name="react">
            <div className="logo"></div>
          </div>
        </section>

        <form className="form-horizontal col-xs-10 col-xs-offset-1" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Email"
            name="email"
            component={this.renderField}
          />
          <div className="form-group">
            <span className="col-xs-3"></span>
            <div className="col-sm-6">
              {this.getSubmitButton()}
              {this.getCancelButton()}
            </div>
          </div>

        </form>

        <ToastContainer
          ref={(input) => { this.container = input; }}
          toastMessageFactory={ToastMessageFactory}
          className="toast-top-right"
          preventDuplicates={false}
        />

       </div>

    );
  }
}


function validate(values) {
  const errors = {};

  if (!values.email || !EmailValidator.validate(values.email)) {
    errors.email = "Enter an email";
  }
  return errors;
}

function mapStateToProps(state) {
  const { error, timestamp, loading } = state.forgot;
  return {
    error,
    timestamp,
    loading
  };
}

export default reduxForm({
  validate,
  form: "ForgotPassword"
})(connect(mapStateToProps, { ...actions, signoutUser } )(ForgotPassword));