import { UserActionTypes } from "./user.types";


const INITIAL_STATE = {
  currentUser: null
};
// a reducer is a pure function that takes an action and the previous state of the app and return a new state
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:  // we do this to keep it const and not having  accidentak types 
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
