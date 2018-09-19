export const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('new state', store.getState());
    return result;
};
