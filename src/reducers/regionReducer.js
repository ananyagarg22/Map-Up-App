// reducers/regionReducer.js

import { SELECT_REGION, LOAD_REGION_DATA_SUCCESS } from '../Actions/regionActions';

const initialState = {
  selectedRegion: null,
  selectedRegionData: null, // Add selectedRegionData to store region information fetched from the API
};

const regionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_REGION:
      return {
        ...state,
        selectedRegion: action.payload,
      };
    case LOAD_REGION_DATA_SUCCESS:
      return {
        ...state,
        selectedRegionData: action.payload,
      };
    default:
      return state;
  }
};

export default regionReducer;
