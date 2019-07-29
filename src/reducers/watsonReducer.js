
import constants from './../constants';
const { initialState, types } = constants;

const watsonReducer = (state = initialState.watsonProfile, action) => {
  switch (action.type) {
  case types.XXX:
    return action.XXX;
  default:
    return state;
  }
};

export default watsonReducer;