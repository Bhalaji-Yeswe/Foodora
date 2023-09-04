import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
const MealItem = (props) =>{
    const price = `$${props.price.toFixed(2)}`;
    const crtctx = useContext(CartContext);
    
    function addSumbitHandler(amount){
        crtctx.addItem({
            id:Math.random().toString(),
            item:props.name,
            amount:amount,
            price:props.price
        })
    }
    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onGettingAmount={addSumbitHandler}/>
            </div>
        </li>
    )
}

export default MealItem;