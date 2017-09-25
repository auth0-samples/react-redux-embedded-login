import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import * as actions from './actions/auth';


class Footer extends Component {

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

      // <div>
      //   <div className="try-banner"><span>Don't have an account yet?</span><a className="btn btn-success btn-lg" href="javascript:signup()">Try Auth0 for // Free</a>
      // </div>

    return (

      <footer className="sc-footer" role="contentinfo">
      <div className="container">
        <div className="sc-footer__logo">
          <img className="sc-footer__logo-image" src="https://cdn.auth0.com/styleguide/components/1.0.8/media/logos/img/badge.png" width="30" />
        </div>
        <div className="sc-footer__grid">
          <div className="sc-footer__column sc-footer__column--grid">
            <div className="sc-footer__item">
              <h6 className="sc-footer__title">Product</h6>
            </div>
            <div className="sc-footer__item"><a className="sc-footer__link sc-footer__link--featured" href="https://auth0.com/pricing">Pricing</a>
            </div>
            <div className="sc-footer__item"><a className="sc-footer__link sc-footer__link--featured" href="https://auth0.com/why-auth0">Why Auth0</a>
            </div>
            <div className="sc-footer__item"><a className="sc-footer__link sc-footer__link--featured" href="https://auth0.com/how-it-works">How It Works</a>
            </div>
            <div className="sc-footer__item"><a className="sc-footer__link sc-footer__link--featured" href="https://auth0.com/lock">Lock</a>
            </div>
          </div>
          <div className="sc-footer__column sc-footer__column--grid">
            <div className="sc-footer__item">
              <h6 className="sc-footer__title">Company</h6>
            </div>
            <div className="sc-footer__item"><a className="sc-footer__link sc-footer__link--featured" href="https://auth0.com/about">About Us</a>
            </div>
            <div className="sc-footer__item"><a className="sc-footer__link sc-footer__link--featured" href="https://auth0.com/blog">Blog</a>
            </div>
            <div className="sc-footer__item"><a className="sc-footer__link sc-footer__link--featured" href="https://auth0.com/jobs">Jobs</a>
            </div>
            <div className="sc-footer__item"><a className="sc-footer__link sc-footer__link--featured" href="https://auth0.com/press">Press</a>
            </div>
          </div>
          <div className="sc-footer__column sc-footer__column--grid">
            <div className="sc-footer__item">
              <h6 className="sc-footer__title">Learn</h6>
            </div>
            <div className="sc-footer__item"><a className="sc-footer__link sc-footer__link--featured" href="https://auth0.com/availability-trust">Availability & Trust</a>
            </div>
            <div className="sc-footer__item"><a className="sc-footer__link sc-footer__link--featured" href="https://auth0.com/security">Security</a>
            </div>
            <div className="sc-footer__item"><a className="sc-footer__link sc-footer__link--featured" href="https://auth0.com/whitehat">White Hat</a>
            </div>
            <div className="sc-footer__item"><a className="sc-footer__link sc-footer__link--featured" href="https://auth0.com/docs/apiv2">API Explorer</a>
            </div>
          </div>
          <div className="sc-footer__column sc-footer__column--grid">
            <div className="sc-footer__item">
              <h6 className="sc-footer__title">More</h6>
            </div>
            <div className="sc-footer__item"><a className="sc-footer__link sc-footer__link--featured" href="https://support.auth0.com">Help & Support</a>
            </div>
            <div className="sc-footer__item"><a className="sc-footer__link sc-footer__link--featured" href="https://auth0.com/docs">Documentation</a>
            </div>
            <div className="sc-footer__item"><a className="sc-footer__link sc-footer__link--featured" href="https://auth0.com/opensource">Open Source</a>
            </div>
            <div className="sc-footer__item"><a className="sc-footer__link sc-footer__link--featured" href="https://auth0.com/wordpress">WordPress</a>
            </div>
          </div>
          <div className="sc-footer__column sc-footer__column--contact">
            <div className="sc-footer__contact-column sc-footer__contact-column--address">
              <div className="sc-footer__item">
                <h6 className="sc-footer__title">Contact</h6>
              </div>
              <div className="sc-footer__item sc-footer__item--text">10900 NE 8th Street
                <br/>Suite 700
                <br/>Bellevue, WA 98004</div>
            </div>
            <div className="sc-footer__contact-column sc-footer__contact-column--phone">
              <div className="sc-footer__item sc-footer__item--small"><a className="sc-footer__link sc-footer__phone" href="tel:+18882352699">+1 (888) 235-2699</a>
              </div>
              <div className="sc-footer__item sc-footer__item--small"><a className="sc-footer__link sc-footer__phone" href="tel:+14253126521">+1 (425) 312-6521</a>
              </div>
              <div className="sc-footer__item sc-footer__item--small"><a className="sc-footer__link sc-footer__phone" href="tel:+4403332341966">+44 (0) 33-3234-1966</a>
              </div>
            </div>
          </div>
        </div>
        <div className="sc-footer__colophon">
          <div className="sc-footer__column">
            <ul className="list-inline sc-footer__list sc-footer__like-buttons-container">
              <li className="sc-footer__list-item"><a className="sc-footer__like-buttons__link sc-footer__like-buttons__link--twitter" href="https://twitter.com/auth0" target="_blank"><span className="sc-footer__like-buttons__icon-container"><svg className="sc-footer__like-buttons__icon" viewBox="0 0 72 72"><path fill="none" d="M0 0h72v72H0z"></path><path fill="#fff" d="M68.812 15.14c-2.348 1.04-4.87 1.744-7.52 2.06 2.704-1.62 4.78-4.186 5.757-7.243-2.53 1.5-5.33 2.592-8.314 3.176C56.35 10.59 52.948 9 49.182 9c-7.23 0-13.092 5.86-13.092 13.093 0 1.026.118 2.02.338 2.98C25.543 24.527 15.9 19.318 9.44 11.396c-1.125 1.936-1.77 4.184-1.77 6.58 0 4.543 2.312 8.552 5.824 10.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163 0 6.345 4.513 11.638 10.504 12.84-1.1.298-2.256.457-3.45.457-.845 0-1.666-.078-2.464-.23 1.667 5.2 6.5 8.985 12.23 9.09-4.482 3.51-10.13 5.605-16.26 5.605-1.055 0-2.096-.06-3.122-.184 5.794 3.717 12.676 5.882 20.067 5.882 24.083 0 37.25-19.95 37.25-37.25 0-.565-.013-1.133-.038-1.693 2.558-1.847 4.778-4.15 6.532-6.774z"></path></svg></span><span className="sc-footer__like-buttons__action">Follow</span><span className="sr-only"> us on Twitter, along with </span><span className="sc-footer__like-buttons__counter sr-only">many</span><span className="sr-only"> followers!</span></a>
              </li>
              <li className="sc-footer__list-item"><a className="sc-footer__like-buttons__link sc-footer__like-buttons__link--linkedin" href="https://www.linkedin.com/company/auth0" target="_blank"><span className="sc-footer__like-buttons__icon-container"><svg className="sc-footer__like-buttons__icon" viewBox="0 50 512 512"><path fill="#ffffff" d="M150.65 100.682c0 27.992-22.508 50.683-50.273 50.683-27.765 0-50.273-22.69-50.273-50.683C50.104 72.692 72.612 50 100.377 50c27.766 0 50.273 22.69 50.273 50.682zm-7.356 86.65H58.277V462h85.017V187.333zm135.9 0h-81.54V462h81.54V317.82c0-38.625 17.78-61.616 51.808-61.616 31.268 0 46.29 22.07 46.29 61.615V462h84.604V288.085s-41.69-109.13-99.934-109.13-82.768 45.368-82.768 45.368v-36.99z"></path></svg></span><span className="sc-footer__like-buttons__action">Follow</span><span className="sr-only"> us on LinkedIn, along with </span><span className="sc-footer__like-buttons__counter sr-only">many</span><span className="sr-only"> followers!</span></a>
              </li>
              <li className="sc-footer__list-item"><a className="sc-footer__like-buttons__link sc-footer__like-buttons__link--facebook" href="https://www.facebook.com/getauth0" target="_blank"><span className="sc-footer__like-buttons__icon-container"><svg className="sc-footer__like-buttons__icon" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M4.55 7c.248 0 .45.234.45.522v5.956c0 .288-.202.522-.45.522h-2.1c-.248 0-.45-.234-.45-.522V7.522C2 7.234 2.202 7 2.45 7h2.1zm1.995 6.2c-.305-.036-.528-.302-.545-.626.017 0 .013-2.906 0-4.43.013-.525.108-1.458.398-1.87.708-1.008 1.205-1.666 1.494-2.048.29-.382.636-.755.646-1.04.013-.384 0-.39 0-.83 0-.44.208-.856.733-.856.257 0 .46.057.65.3.304.356.516.92.516 1.81S9.51 6.173 9.51 6.18h4.037c.618-.004.954.545.954 1.117 0 .536-.364.982-.844 1.057.29.14.5.47.5.852 0 .476-.325.872-.756.94.23.145.375.406.375.702 0 .398-.26.733-.615.813.21.14.346.396.346.685 0 .452-.334.823-.763.857H6.545z"></path></svg></span><span className="sc-footer__like-buttons__action">Like</span><span className="sr-only"> our Facebook page, along with </span><span className="sc-footer__like-buttons__counter sr-only">many</span><span className="sr-only"> people!</span></a>
              </li>
            </ul>
          </div>
          <script src="https://cdn.auth0.com/website/auth0-footer-counters.min.js" async="async" defer="defer"></script>
          <div className="sc-footer__column">
            <ul className="list-inline text-right sc-footer__list">
              <li className="sc-footer__list-item"><a className="sc-footer__link" href="https://auth0.com/privacy">Privacy Policy</a>
              </li>
              <li className="sc-footer__list-item"><a className="sc-footer__link" href="https://auth0.com/terms">Terms of Service</a>
              </li>
              <li className="sc-footer__list-item"><span>&copy; 2013-2017 Auth0&reg; Inc. All Rights Reserved.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    );
  }

}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, actions)(Footer);
