import { combineReducers } from "redux";
import { queryReducer } from "./queryReducer";
import { resultsReducer } from "./resultsReducer";
import { notificationReducer } from "./notificationReducer";

export const createRootReducer = () => combineReducers({
    query: queryReducer,
    results: resultsReducer,
    notification: notificationReducer,
})
