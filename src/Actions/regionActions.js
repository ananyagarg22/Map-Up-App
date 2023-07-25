// actions/regionActions.js

// Action Types
export const SELECT_REGION = 'SELECT_REGION';
export const LOAD_REGION_DATA_SUCCESS = 'LOAD_REGION_DATA_SUCCESS'; // Action type for successful data fetching

// Action Creators
export const selectRegion = (region) => ({
  type: SELECT_REGION,
  payload: region,
});

// Action Creator for loading region data
export const loadRegionData = (region) => {
  // Simulate API call to fetch region data based on the selected region
  // Replace this with an actual API call to fetch data from your API endpoint
  const regionData = fetchRegionDataFromAPI(region);

  // Return the action with the fetched data as the payload
  return {
    type: LOAD_REGION_DATA_SUCCESS,
    payload: regionData,
  };
};

// Function to simulate API call to fetch region data (Replace this with an actual API call)
const fetchRegionDataFromAPI = (region) => {
  // In this example, we are returning dummy data based on the selected region
  if (region === 'United States') {
    return {
      currencySymbol: '$',
      speedUnits: 'mph',
      distanceUnits: 'miles',
      volumeUnits: 'gallons',
      timezones: ['GMT-4', 'GMT-5', 'GMT-6'],
    };
  } else if (region === 'India') {
    return {
      currencySymbol: '₹',
      speedUnits: 'kmph',
      distanceUnits: 'kilometers',
      volumeUnits: 'liters',
      timezones: ['IST'],
    };
  } else if (region === 'United Kingdom') {
    return {
      currencySymbol: '£',
      speedUnits: 'mph',
      distanceUnits: 'miles',
      volumeUnits: 'liters',
      timezones: ['GMT'],
    };
  } else {
    return null;
  }
};
