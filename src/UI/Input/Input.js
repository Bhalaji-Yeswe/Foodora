import React from "react";
import classes from "./Input.module.css";
const Input = React.forwardRef((props,ref) => {
    return(
        <span className={classes.span}>
            <label id={props.input.id}>
                {props.label}
            </label>
            <input {...props.input} ref={ref} ></input>
        </span>
    )
})

export default Input;