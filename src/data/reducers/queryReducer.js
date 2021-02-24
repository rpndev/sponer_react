import { SAVE_INGREDIENT_SEARCH_PARAM } from "../actionTypes";

const initialState = {
    searches: [],
}

export const queryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_INGREDIENT_SEARCH_PARAM: {
            const copy = state.searches.slice();
            copy.push(action.payload);
            return { searches: copy };
        }
        default: return state;
    }
}
