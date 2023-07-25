// reducers/nightModeReducer.js

import { TOGGLE_NIGHT_MODE } from '../Actions/nightModeActions';

const initialState = {
  nightMode: false,
};

const nightModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NIGHT_MODE:
      return {
        ...state,
        nightMode: !state.nightMode,
      };
    default:
      return state;
  }
};

export default nightModeReducer;
