import {
    compose,
    createStore,
    applyMiddleware,
    Middleware
} from 'redux';
import logger from 'redux-logger';
import {
    persistStore,
    persistReducer,
    PersistConfig
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './root-reducer';
//import thunk from 'redux-thunk';
import { rootSaga } from './root-saga';
import createSagaMiddleware from '@redux-saga/core';


export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[]
};

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
};

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnhancer = (
    process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const composedEnhancers = composeEnhancer(
    applyMiddleware(
        ...middleWares
    )
);

const persistConfig: ExtendedPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);

export const store = createStore(
    persistedReducer,
    undefined,
    composedEnhancers
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
