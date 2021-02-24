import React, { useState } from 'react';
import ResultsNav from './ResultsNav';

const UserSearch = () => {

	const [watsonResponse, setWatsonResponse] = useState(null);
	const [twitterHandle, setTwitterHandle] = useState('');
	const [tweets, setTweets] = useState([]);

	const callWatsonApi = (user) => {
		fetch(`http://localhost:9000/watsonAPI?username=${user}`)
			.then(profile => profile.json())
			.then(profile => setWatsonResponse(profile));
	};

	const callTwitterAPI = (user) => {
		fetch(`http://localhost:9000/twitterAPI?username=${user}`)
			.then(tweets => tweets.json())
			.then(tweets => setTweets(tweets));
	};

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		const user = event.target.twitterHandle.value;
		setTwitterHandle(user);
		callTwitterAPI(user);
		callWatsonApi(user);
	};

	const search = <div className="window">
		<h3>Enter a Twitter user's handle to get a personality breakdown based on their posting history</h3>
		<p className="patient">Be patient, Watson needs to think...</p>

		<form onSubmit={handleSearchSubmit}>
			<input
				type='text'
				name='twitterHandle'
				placeholder='Enter a Twitter handle'
			/>
			<button type='submit'>Search</button>
		</form>
	</div>;

	let searchResults = null;
	if (watsonResponse !== null && twitterHandle !== "") {
		console.log(watsonResponse);
		searchResults = <ResultsNav twitterHandle={twitterHandle}
			tweets={tweets}
			watsonResponse={watsonResponse} />;
	}

	return (
		<React.Fragment>
			{searchResults === null ? search : searchResults}
		</React.Fragment>
	);
};

export default UserSearch;