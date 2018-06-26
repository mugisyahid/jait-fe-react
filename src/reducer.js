import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import common from "./reducers/common";
import auth from "./reducers/auth";
import ticket from "./reducers/tickets";

export default combineReducers({
  auth,
  common,
  ticket,
  router: routerReducer
});
