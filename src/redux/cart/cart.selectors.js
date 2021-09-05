import  {createSelector} from 'reselect'
    //input selector is a function that usually  takes the state and return a part of it
const  SelectCart = state => state.cart //input selector
//output selector
export const selectCartItems = createSelector(
 [SelectCart] ,
 cart => cart.cartItems  
)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
   cartItems=> cartItems.reduce((accumulatedQuantity,cartItem) => accumulatedQuantity + cartItem.quantity,0)
)
