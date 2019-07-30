import React from 'react';

class TwitterInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      twitterResponse: [],
      twitterHandle: "gwar"
    };
  }

  callTwitterAPI() {
    fetch("http://localhost:9000/twitterAPI")
      .then(res => res.text())
      .then(res => this.setState({ twitterResponse: res }));
  }

  componentDidMount() {
    this.callTwitterAPI();
  }

  render() {
    return (
      <div>
        <h1>{this.state.twitterHandle}</h1>
        <h5>{this.state.twitterResponse}</h5>
        <form onSubmit={this.callTwitterAPI}>
          <input
            type='text'
            id='twitterHandle'
            placeholder='Enter a Twitter handle'
            // ref={(input) => { this.setState(twitterHandle: input)); }}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    );
  }
}


export default TwitterInput;
