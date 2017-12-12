import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, ToastMessage } from 'react-toastr';
import * as actions from '../../actions/auth';
import { Button } from '@auth0/styleguide-react-components';
import * as EmailValidator from 'email-validator';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);
class Signin extends Component {

  componentWillMount() {
    this.props.signoutUser();
  }

  componentWillUpdate(nextProps, nextState) {
    const { error, forgotMsg } = nextProps;
    if (error) {
      this.container.error(`Signin failed: ${error}`, "Error occurred", {
        timeOut: 3000, extendedTimeOut: 4000
      });
      nextProps.cleardown();
    } else if (forgotMsg) {
      this.container.success(`${forgotMsg}`, "Success", {
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

  renderPasswordField(field) {
      const { meta: { touched, error } } = field;
      const classNameFormGroup = `form-group ${touched && error ? "has-error" : ""}`;
      const classNameFormControl = `form-control ${touched && error ? "has-error" : ""}`;
      return (
        <div className={classNameFormGroup}>
          <label className="col-xs-3 control-label">{field.label}</label>
          <div className="col-xs-6">
            <input className={classNameFormControl} type="password" {...field.input} />
            <div className="text-help">
              {touched ? error : ""}
            </div>
          </div>
        </div>
      );
  }

  onSubmit(values) {
    const { email, password } = values;
    this.props.signinUser({ email, password }, () => {
      return this.props.history.push("/home");
    });
  }

  getSigninButton() {
    if (this.props.loading) {
      return (
        <div className="spinner spinner-md is-auth0">
          <div className="circle"></div>
        </div>
      )
    }
    return <Button type="submit" className="btn btn-success btn-sm">Submit</Button>;
  }

  getForgotButton() {
    if (!this.props.loading) {
      return <Link to="/forgot" className="btn btn-primary btn-sm">Forgot Password</Link>;
    }
  }

  render() {

    const { handleSubmit } = this.props;

    return (

      <div>

        <section className="jumbotron">
          <h1>Login</h1>
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
        <Field
          label="Password"
          name="password"
          component={this.renderPasswordField}
        />
        <div className="form-group">
          <span className="col-xs-3"></span>
          <div className="col-sm-6">
          {this.getSigninButton()}
          {this.getForgotButton()}
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
  if (!values.password) {
    errors.password = "Enter a password";
  }
  return errors;
}

function mapStateToProps(state) {
  const { error, timestamp, forgotMsg, loading } = state.auth;
  return {
    error,
    timestamp,
    forgotMsg,
    loading
  };
}

export default reduxForm({
  validate,
  form: "SigninForm"
})(connect(mapStateToProps, actions)(Signin));