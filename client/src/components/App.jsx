import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import WatsonInput from './WatsonInput';

class App extends React.Component {

	render() {
		return (
			<React.Fragment>
				<Header />
				<WatsonInput />
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
