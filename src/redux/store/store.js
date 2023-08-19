// Import necessary Redux functions
import { combineReducers, createStore } from "redux";

// Import the contactReducer to combine with other reducers
import contactReducer from "../reducer/contact-reducer";

// Combine multiple reducers into a rootReducer
const rootReducer = combineReducers({
  contactReducer, // Add other reducers here if needed
});

// Create the Redux store using the rootReducer
const store = createStore(rootReducer);

export default store;
