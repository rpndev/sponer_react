import { showNotification, notificationType } from './notificationActions';
import { ingredientsService } from '../../services/ingredientsService';

import { FETCH_RECIPES_BY_INGREDIENTS, SAVE_INGREDIENT_SEARCH_PARAM } from '../actionTypes';

const saveSearchIngredientParam = ingredient => ({
    type: SAVE_INGREDIENT_SEARCH_PARAM,
    payload: ingredient,
})

const fetchRecipesByIngredient = recipes => ({
    type: FETCH_RECIPES_BY_INGREDIENTS,
    payload: recipes,
})

export const requestQuery = input => async dispatch => {
    try {
        dispatch(showNotification(`Successfully fetched recipes with ${input}`, notificationType.success));
        const response = await ingredientsService.getRecipesByIngredients(input);
        console.log(response);
        dispatch(saveSearchIngredientParam(input));
        dispatch(fetchRecipesByIngredient(response));
    } catch (err) {
        console.log(err);
        dispatch(showNotification(`Error occured while fetching: ${input}`, notificationType.error));
    }
}
