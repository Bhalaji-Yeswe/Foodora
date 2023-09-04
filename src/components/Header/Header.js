import { Fragment } from "react";
import Meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartIcon from "./HeaderCartIcon";
const Header = (props) =>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>FoodDora</h1>
                <HeaderCartIcon onClick={props.onHandleCart}></HeaderCartIcon>
            </header>
            <div className={classes['main-image']}>
                <img src={Meals} alt="A Pic of Meals offered in Foodora"></img>
            </div>
        </Fragment>
    )
}

export default Header;