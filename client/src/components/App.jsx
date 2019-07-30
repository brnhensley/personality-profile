import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import PropTypes from 'prop-types';

// STATE

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {

    return (
      <div>
        <Header />
        <h1 className="App-intro">{this.state.apiResponse}</h1>
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
