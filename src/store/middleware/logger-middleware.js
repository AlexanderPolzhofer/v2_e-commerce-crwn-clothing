// create logger middleware

export const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action)
    }
    console.log('type: ', action.type)
    console.log('payload: ', action.payload)
    console.log('currentState: ',)

    console.log('next state: ', store.getState())
}