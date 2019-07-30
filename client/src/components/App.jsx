import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import PropTypes from 'prop-types';

// STATE

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }

  callAPI() {
    var url = new URL("http://localhost:9000/testAPI"),
      params = { handle: 'gwar' }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url)
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .then(console.log(this.state.apiResponse));
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
