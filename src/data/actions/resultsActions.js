export const saveToRecentSearches = input => async dispatch => {
    try {
        // TODO: implement save to recent searches / search history
    } catch (err) {
        console.log(err);
        dispatch(showNotification(`Error occured while saving to recent searches: ${input}`, notificationType.error));
    }
}
