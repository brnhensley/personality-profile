
import constants from './../constants';
const { initialState, types } = constants;

const twitterReducer = (state = initialState.twitterData, action) => {
	switch (action.type) {

		case types.SEARCH_TWITTER:
			return action.XXX;

		case types.WORDCLOUD:
			return ;

		default:
			return state;
	}
};

export default twitterReducer;