import { ADD_ARTICLE } from "../constants/action-types";

/**
 * An action is a signal to the state store that the state
 * should be updated according the the action type and the
 * attached payload when appropriate.
 */


// todo: remove me
export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}