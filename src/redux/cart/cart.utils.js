
export const addItemToCart = (cartItems , cartItemToAdd) => {
    const existingCartItem = cartItems.find(    //will find the first item based on the condition 
        cartItem => cartItem.id === cartItemToAdd.id
        )

if(existingCartItem) {
    return cartItems.map(cartItem=>
        cartItem.id === cartItemToAdd.id
? {...cartItem,quantity:cartItem.quantity +1}
        : cartItem
        )
}
return [...cartItems, {...cartItemToAdd,quantity:1}]
    }