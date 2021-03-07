import { combineReducers, createStore, applyMiddleware } from 'redux';
import listReducer from './redux/ArrayReducer';
import sortSpeedReducer from './redux/SpeedReducer'

//customMiddleWare gets triggered when the the value of the list in the store changes
//just for personal knowledge purposes, not affecting any component
const customMiddleWare = store => next => action => {
    // console.log("Middleware triggered:", action); // uncomment and check the console
    next(action);
  }
const rootReducer = combineReducers({listReducer, sortSpeedReducer})
// const store = createStore(listReducer, applyMiddleware(customMiddleWare));
const store = createStore(rootReducer, applyMiddleware(customMiddleWare));

export default (customMiddleWare, store);