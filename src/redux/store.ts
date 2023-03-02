import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const middlewares = [reduxThunk];

export function configureStore(initialState: {}) {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middlewares)));
}

export type RootState = ReturnType<typeof reducers>;

