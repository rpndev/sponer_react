import { SAVE_INGREDIENT_SEARCH_PARAM } from "../actionTypes";

const initialState = {
    searches: [],
}

export const ingredientQueryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_INGREDIENT_SEARCH_PARAM: {
            if (!state.searches.includes(action.payload)) {
                const copy = state.searches.slice();
                copy.push(action.payload);
                return { searches: copy };
            } else {
                return state;
            }
        }
        default: return state;
    }
}
