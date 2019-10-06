import React, { useState } from 'react';
import PersonalityBreakdown from './PersonalityBreakdown';
// import rd3 from 'react-d3-library'  - For Later


const WatsonInput = () => {

	const [data, setData] = useState({
		watsonResponse: null,
		twitterHandle: '',
		displayHandle: ''
	})

	const callWatsonAPI = () => {
		fetch(`http://localhost:9000/watsonAPI?name=${data.twitterHandle}`)
			.then(res => res.json())
			.then(res => setData({ ...data, watsonResponse: res }))
			.then(data.displayHandle = data.twitterHandle)
	}

	let search = <div className="window">
		<h3>Enter a Twitter user's handle to get a personality breakdown based on their posting history</h3>
		<p className="patient">Be patient, Watson needs to think...</p>

		<form onSubmit={event => {
			event.preventDefault()
			callWatsonAPI();
		}}>
			<input
				type='text'
				id='twitterHandle'
				placeholder='Enter a Twitter handle'
				onChange={event => setData({ ...data, twitterHandle: event.target.value })}
			/>
			<button type='submit'>Search</button>
		</form>
	</div>

	// let personalityBreakdown = ;
	let renderPage = data.watsonResponse !== null ? <PersonalityBreakdown watsonResponse={data.watsonResponse} twitterHandle={data.displayHandle} /> : search;

	return (
		<React.Fragment>
			{renderPage}
		</React.Fragment>
	);

}

export default WatsonInput;