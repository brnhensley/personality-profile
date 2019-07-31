import React from 'react';

class TwitterInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      watsonResponse: [],
      twitterHandle: "gwar"
    };
  }

  callWatsonAPI() {
    fetch("http://localhost:9000/watsonAPI")
      .then(res => res.json())
      .then(res => this.setState({ watsonResponse: res }))
  }

  componentDidMount() {
    this.callWatsonAPI();
  }

  getState = () => console.log(this.state.watsonResponse);


  render() {
    return (
      <div>
        <button onClick={this.getState}>GET STATE</button>

        {/* <h1>{this.state.twitterHandle}</h1> */}
        <h5>{JSON.stringify(this.state.watsonResponse)}</h5>
        <form onSubmit={this.callWatsonAPI}>
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
