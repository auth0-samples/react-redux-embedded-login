import React from 'react';
import { Component } from 'react';

// import { Footer } from '@auth0/styleguide-react-components';

import Header from './Header';
import Footer from './Footer';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}