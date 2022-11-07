//This version almost doesn't do anything
import thunk from 'redux-thunk';
import rootReducer from './index';
import { combineReducers, createStore, applyMiddleware } from "redux";


const middleware = [thunk];


export const store = createStore(rootReducer, applyMiddleware(thunk))



  