import React from 'react';
import classes from './Recipe.module.css';

const Recipe = ({ title, image, ingredients, url}) => {
    return (
    <>
        <div className={classes.RecipeContainer}>
            <div className={classes.Top}>
                    <img className={ classes.img} src={ image } alt="recipe images" />
            </div>
                <h2>{title}</h2>    
            <div className={classes.Bottom}>
                <a rel="noreferrer" href={ url } target="_blank">See Recipe</a>
            </div>
        </div>
    </>
    );
};

export default Recipe;



{/* <ul>
    {ingredients.map(ingredient => (
    <li>{ ingredient.text }</li>
    ))}
</ul> */}