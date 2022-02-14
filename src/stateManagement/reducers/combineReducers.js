import { combineReducers } from 'redux';
import shoppingReducer from './shoppingReducer';

//Recibe los reducers a combinar

export default combineReducers ({       
    shoppingReducer,
})