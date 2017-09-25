import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, ToastMessage } from 'react-toastr';
import * as actions from '../../actions/home';

const ToastMessageFactory = React.createFactory(ToastMessage.animation);
class Home extends Component {

  componentWillMount() {
    // empty for now...
  }

  componentWillUpdate(nextProps, nextState) {
    const { passwordMsg } = nextProps;
    if (passwordMsg) {
      this.container.success(`${passwordMsg}`, "Success", {
        timeOut: 3000, extendedTimeOut: 4000
      });
      nextProps.cleardown();
    }
  }

  render() {

    return (

      <div>

        <section className="jumbotron">
          <h1>Home</h1>
          <div className="circle-logo" data-name="react">
            <div className="logo"></div>
          </div>

        </section>

      <form className="form-horizontal col-xs-10 col-xs-offset-1" onSubmit={e => e.preventDefault()}>
        <div className="form-group">
          <span className="col-xs-3"></span>
          <div className="col-sm-9">
          <Link to="/password" className="btn btn-primary btn-sm">Change Password</Link>
          <Link to="/" className="btn btn-warning btn-sm">Logout</Link>
          </div>
        </div>

       </form>

       <ToastContainer
          ref={(input) => { this.container = input; }}
          toastMessageFactory={ToastMessageFactory}
          className="toast-top-right"
          preventDuplicates="false"
        />

       </div>

    );
  }
}

function mapStateToProps(state) {
  const { passwordMsg } = state.home;
  return {
    passwordMsg
  };
}

export default connect(mapStateToProps, actions)(Home)