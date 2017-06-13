import { combineReducers } from 'redux';

// Reducers
import productReducer from './ProductReducer';
import searchLayoutReducer from './searchLayoutReducer';

// Combine Reducers
var reducers = combineReducers({
    productState: productReducer,
    searchLayoutState: searchLayoutReducer
});

export default reducers;
