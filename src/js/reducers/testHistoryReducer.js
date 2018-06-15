import {UNDO, REDO} from "../constants/reduxTypes";


export function historyReducerWrapper(reducer) {
    const initialState = {
        past: [],
        present: null,
        future: []
    };

    return function History(state = initialState, action) {
        const {past, present, future} = state;
        let current;

        switch (action.type) {
            case UNDO:
                current = past[past.length - 1];
                const newPast = past.slice(0, past.length - 1);
                return {
                    past: newPast,
                    present: current,
                    future: [present, ...future]
                };
            case REDO:
                current = future[0];
                const newFuture = future.slice(1);
                return {
                    past: [...past, present],
                    present: current,
                    future: newFuture
                };
            default:
                const newPresent = reducer(present, action);
                if (newPresent === present)
                    return state;
                return {
                    past: [...past, present],
                    present: newPresent,
                    future: []
                }
        }
    }
}
