import { useContext, useEffect, useState } from "react";
import { CartIcon } from "../Cart/CartIcon";
import classes from "./HeaderCartIcon.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartIcon = (props) =>{
    const crtctx = useContext(CartContext);
    const getAmount = crtctx.items.reduce((prevItem,item)=>{
        return prevItem+item.amount;
    },0);
    const {items} = crtctx;
    useEffect(()=>{
        if(items.length>0){
            setBtnIsHighlighted(true);
        }

        const timer = setTimeout(()=>{
            setBtnIsHighlighted(false);
        },300)

        return () =>{
            clearTimeout(timer);
        }
    },[items]);

    const[btnIsHighlighted,setBtnIsHighlighted] = useState(true);
    const btnClass = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
    return(
        <button className={btnClass} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon></CartIcon></span>
            <span className={classes.para}>Your Cart</span>
            <span className={classes.badge}>{getAmount}</span>
        </button>
    )
}

export default HeaderCartIcon;