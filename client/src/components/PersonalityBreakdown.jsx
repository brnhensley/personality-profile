import React from 'react';
import PropTypes from 'prop-types';

function PersonalityBreakdown(props) {
	const results = props.watsonResponse;
	console.log(results);
	return (<>
		{Object.values(results.traits).map((personalityTrait) => {
			return (
				<div className="window" key={results.traits.indexOf(personalityTrait)}>
					<h3>Big Five Personality Trait: {personalityTrait.name}: {(personalityTrait.percentile * 100).toFixed(2)}%</h3>

					{Object.values(personalityTrait.children).map((subTrait) => {
						return <h5 key={personalityTrait.children.indexOf(subTrait)}>
							{subTrait.name} - {(subTrait.percentile * 100).toFixed(2)}%
              			</h5>;
					})}
				</div>
			);
		})}

		<div className="window">
			<h3>Maslow's hierarchy of needs</h3>

			{Object.values(results.needs).map(function (need) {
				return (
					<h5 key={results.needs.indexOf(need)}>
						{need.name}: {(need.percentile * 100).toFixed(2)}%
					</h5>
				);
			})}

		</div>
	</>);
}

PersonalityBreakdown.propTypes = {
	watsonResponse: PropTypes.any.isRequired
};

export default PersonalityBreakdown;