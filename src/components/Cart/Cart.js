import { useContext } from "react";
import Modal from "../../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) =>{
    const crtctx = useContext(CartContext);
    const totalAmount = `$${crtctx.totalAmount.toFixed(2)}`;
    const hasItems = crtctx.items.length>0;
    function carItemRemoveHandler(name){
        crtctx.removeItem(name);
    }

    function cartItemAddHandler(item){
        crtctx.addItem({...item,amount:1});
    }
    const cartItems = (
        <ul className={classes['cart-items']}>
            {crtctx.items.map(item =>
                <CartItem key={props.id} id={item.id} price={item.price} name={item.item} amount={item.amount}
                            onRemove={carItemRemoveHandler.bind(null,item.item)}
                            onAdd={cartItemAddHandler.bind(null,item)}
                />
            )}
        </ul>
    );
    console.log(crtctx.items);
    return(
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHandleCart}>Close</button>
                {hasItems && <button className={classes['button']}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;