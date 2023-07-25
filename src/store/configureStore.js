// store/configureStore.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import regionReducer from '../reducers/regionReducer';
import nightModeReducer from '../reducers/nightModeReducer'; // Import the nightModeReducer

// Combine multiple reducers (regionReducer, nightModeReducer, etc.) if you have more
const rootReducer = combineReducers({
  region: regionReducer,
  nightMode: nightModeReducer, // Include the nightModeReducer in the root reducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
