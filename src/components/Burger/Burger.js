import React from 'react'

import BurgerIngredient from '../BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'


const Burger = (props) => {
    const ingedient = Object.keys(props.ingredient).map((val, i) => {
        //console.log(val, '----', props.ingredient[val])
        //console.log([...Array(props.ingredient[val])])
        return [...Array(props.ingredient[val])].map((x, y) => {
            return <BurgerIngredient type={val} key={val + y}></BurgerIngredient>;
        });
    });
    console.log(ingedient)
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            {ingedient}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </div>
    );
}
export default Burger;