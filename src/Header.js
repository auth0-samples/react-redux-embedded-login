import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import * as actions from './actions/auth';


class Header extends Component {

  renderLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return <li className="nav-item">
        <Link className="nav-link" to="/">Sign Out</Link>
      </li>
    }
  }

  render() {

    // <nav className="navbar navbar-light">
    //   <ul className="nav navbar-nav">
    //     {this.renderLinks()}
    //   </ul>
    // </nav>

    return (


      <header className="site-header">
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
            </button>
            <h1 className="navbar-brand"><a href="/"><span>Auth0</span></a></h1><a className="no-basic hiring animated bounce hidden-sm hidden-xs hidden-md" href="/jobs">We&apos;re hiring!</a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav navbar-left no-basic">
              <li className="li-why"><a href="/why-auth0">Why Auth0</a>
              </li>
              <li className="li-how"><a href="/how-it-works">How It Works</a>
              </li>
              <li className="li-pricing"><a href="/pricing">Pricing</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="li-docs no-basic"><a href="/support">Help &amp; Support</a>
              </li>
              <li className="li-docs no-basic"><a href="/docs">Documentation</a>
              </li>
              <li><a className="signin-button login" href="https://manage.auth0.com">Open Dashboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>



    );
  }

}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, actions)(Header);
