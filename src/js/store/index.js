import { createStore } from "redux";
import rootReducer from "../reducers/index";

/**
 * A store is created to elevate state throughout the application,
 * individual subsets of the state store are "reductions" of the total state
 * and are selected down to by various "redycers"
 *
 * Tip: To avoid mutations in Redux use concat, slice, or the spread operator
 * for arrays, use Object.assign or object spread of objects
 */
const store = createStore(rootReducer);

export default store;