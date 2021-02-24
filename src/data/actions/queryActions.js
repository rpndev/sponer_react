import { showNotification, notificationType } from './notificationActions';

export const requestQuery = input => async dispatch => {
    try {
        dispatch(showNotification(`Successfully fetched: ${input}`, notificationType.success));
        // TODO: implement query
    } catch (err) {
        console.log(err);
        dispatch(showNotification(`Error occured while fetching: ${input}`, notificationType.error));
    }
}
