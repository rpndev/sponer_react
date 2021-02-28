import { FETCH_RECIPES_BY_INGREDIENTS } from "../actionTypes";

const initialState = {
    recipes: [],
}

export const ingredientRecipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECIPES_BY_INGREDIENTS: return { recipes: action.payload };
        default: return state;
    }
}
