export const logger = store => dispatch => action => {
    console.log('dispatching', action);
    let result = dispatch(action);
    console.log('new state', store.getState());
    return result;
};
