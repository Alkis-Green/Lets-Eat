import React, { useEffect, useState } from 'react';
import { APP_ID, APP_KEY} from '../../Keys';
import Recipe from './Recipe';
import classes from './Recipes.module.css';

const Recipes = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [pagination, setPagination] = useState(0);
  const [showBtn, setShowBtn] = useState(false);

    
  useEffect(() => {
    getRecipes()
  }, [query, pagination]);
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${pagination}&to=${pagination + 10}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const handleInput = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    setShowBtn(true);
  }

  const prevClick = () => {
    setPagination(pagination - 10);
  }

  const nextClick = () => {
    setPagination(pagination + 10);
  }

  return (
    <>
      <div className={classes.RecipesContainer}>

        <div className={classes.Header}>
          <h1>Explore thousands <span>recipes</span> now!</h1>
          <p>Here you can find everything related to <span className={classes.Drink}>Drinks</span>, <span className={classes.Food}>Food</span>, <span className={classes.Pastry}>Pastry </span>and everything you can possibly imagine </p>
        </div>
        <div className={classes.formContainer}>
            <form className={classes.form} onSubmit={ getSearch }>
              <input type="text" placeholder="Search Recipe..." value={search} onChange={ handleInput } />
              <button type="submit">Search</button>
            </form>
        </div>
        <div className={classes.RecipeWrapper}>
            {recipes.map(recipe => (
              <Recipe key={recipe.recipe.image}
                url={ recipe.recipe.url }
                title={recipe.recipe.label}
                image={recipe.recipe.image} />
            ))}
        </div>
          {showBtn ?
          <div className={classes.PaginationContainer}>
          <button onClick={prevClick}>Prev</button>
          <p>Page - { pagination }</p>
          <button onClick={ nextClick }>Next</button>
          </div> : null}
      </div>
    </>
  );
};

export default Recipes;


