import { useReducer } from "react"
import CartContext from "./cart-context"

const CartProvider = (props) =>{
    const defaultCartState = {
        items:[],
        totalAmount:0
    }
    const cartReducer = (state,action) =>{
        if(action.type==="ADD"){
            const existingCartItemIndex = state.items.findIndex(item => item.item===action.item.item);
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems;
            if(existingCartItem){
                const updatedItem = {
                    ...existingCartItem,
                    amount: action.item.amount + existingCartItem.amount
                }
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            else{
                updatedItems = state.items.concat(action.item);
            }
            const updatedTotalAmount = state.totalAmount+ (action.item.price * action.item.amount);
            
            return(
                {
                    items:updatedItems,
                    totalAmount:updatedTotalAmount
                }
            );
        }

        if(action.type === "REMOVE"){
            const existingCartItemIndex = state.items.findIndex(item => item.item===action.name);
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedTotalAmount = state.totalAmount - existingCartItem.price;
            
            let updatedItems = [];
            if(existingCartItem.amount===1){
                updatedItems = state.items.filter(item=>item.item!==action.name);
            }
            else{
                const updatedItem = {...existingCartItem,amount:existingCartItem.amount-1};
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            return(
                {
                    items: updatedItems,
                    totalAmount: updatedTotalAmount
                }
            );
        }
    }
    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState);
    const addCartItem = (item) =>{
        dispatchCartAction({type:"ADD",item:item});
    }

    const removeCartItem = (name) =>{
        dispatchCartAction({type:"REMOVE",name:name});
    }
    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addCartItem,
        removeItem: removeCartItem
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;