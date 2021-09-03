import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer
});
// a reducer is a pure function that takes an action and the previous state of the app and return a new state