import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

const configureStore = (initialState = {}) => {
    const isDevEnv = process.env.NODE_ENV === 'development';
    const middleware = [];

    const composeEnhancers =
        // eslint-disable-next-line no-underscore-dangle
        (isDevEnv && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    const appReducer = combineReducers({});

    /**
     * This reducer resets the store when a different store is selected,
     * except for the keys included in retainKeys
     */
    const rootReducer = (state, action) => {
        return appReducer(state, action);
    };

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middleware)),
    );
};

const reduxStore = configureStore();

export const { dispatch } = reduxStore;

export default reduxStore;
