import { useRef, useState } from "react";
import Input from "../../../UI/Input/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) =>{
    const amoutRef = useRef()
    const [error,setError] = useState(false)
    function onSubmitHandler(event){
        event.preventDefault();
        const updatedAmount = +amoutRef.current.value;
        
        if(amoutRef.current.value.trim().length===0 || (updatedAmount<1 || updatedAmount>5)){
            setError(false);
            return;
        }
        else{
            props.onGettingAmount(updatedAmount);
        }
    }
    return(
        <form className={classes.form}>
            <Input
                ref = {amoutRef} 
                label="Amount" 
                input={{
                    id:"input",
                    min:1,
                    max:5,
                    step:1,
                    defaultValue:1
                }}/>
            <button onClick={onSubmitHandler}>+Add</button>
            {error && <p>Cart Amount is invalid</p>}
        </form>
    )
}

export default MealItemForm;