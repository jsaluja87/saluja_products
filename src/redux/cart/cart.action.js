import CartActionTypes from './cart.types';
import CartImportTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartImportTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})