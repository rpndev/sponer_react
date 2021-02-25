import { showNotification, notificationType } from './notificationActions';

import { SAVE_INGREDIENT_SEARCH_PARAM } from '../actionTypes';

const saveSearchIngredientParam = ingredient => ({
    type: SAVE_INGREDIENT_SEARCH_PARAM,
    payload: ingredient,
})

export const saveToRecentSearches = input => async dispatch => {
    try {
        dispatch(saveSearchIngredientParam(input));
    } catch (err) {
        console.log(err);
        dispatch(showNotification(`Error occured while saving to recent searches: ${input}`, notificationType.error));
    }
}
