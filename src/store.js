import { createStore, applyMiddleware } from 'redux';
import listReducer from './redux/Reducer';

const customMiddleWare = store => next => action => {
    console.log("Middleware triggered:", action);
    next(action);
  }

const store = createStore(listReducer, applyMiddleware(customMiddleWare));

export default (customMiddleWare, store);