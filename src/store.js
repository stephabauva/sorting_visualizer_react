import { createStore, applyMiddleware } from 'redux';
import listReducer from './redux/Reducer';

//customMiddleWare gets triggered when the the value of the list in the store changes
//just for demo, not affecting any component
const customMiddleWare = store => next => action => {
    // console.log("Middleware triggered:", action); // uncomment and check the console
    next(action);
  }

const store = createStore(listReducer, applyMiddleware(customMiddleWare));

export default (customMiddleWare, store);