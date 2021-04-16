import { ADD_ARTICLE } from "../constants/action-types";

/** Reducers are functions that reduce the total state
 * store to a subset as prescribed by the passed action.
 */

const initialState = {
    // todo: remove me
    articles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        state.articles.push(action.payload);
    }
    return state;
};

export default rootReducer;