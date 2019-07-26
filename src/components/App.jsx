import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
// import { Switch, Route, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import c from './../constants';

// STATE

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
