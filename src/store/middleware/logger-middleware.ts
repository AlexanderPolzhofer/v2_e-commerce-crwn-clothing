import { Middleware } from 'redux';
import { RootState } from '../store';

// create logger middleware

export const loggerMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action)
    }
    console.log('type: ', action.type)
    console.log('payload: ', action.payload)
    console.log('currentState: ',)

    console.log('next state: ', store.getState())
};