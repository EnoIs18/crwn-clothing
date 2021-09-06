import { createSelector } from "reselect";

const selectUser = state => state.user

export const selectCurrentUser = createSelector(
    [selectUser],  //can be an array of our input selector
    (user) => user.currentUser  //function that get the return of the input selector
    )


