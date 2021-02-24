import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import UserSearch from './UserSearch';

class App extends React.Component {

	render() {
		return (
			<React.Fragment>
				<Header />
				<UserSearch />
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
