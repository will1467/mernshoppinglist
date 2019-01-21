import {createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './reducers';

const intialState = {};

const middleware = [thunk];


const Store = createStore(rootReducer, intialState, compose(applyMiddleware(...middleware)))

export default Store;