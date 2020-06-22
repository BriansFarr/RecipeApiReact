import React, { useEffect, useState } from "react";
import Recipe from './recipe'
import "./App.css";




const App = () => {
  const APP_ID = "63a334a9";
  const APP_KEY = "ff01d9bceb487327e576bbda49ebe1e3";
  
  const [recipes, setRecipes] = useState([]);
  
  const [search, setSearch] = useState('');

  const[query, setQuery] = useState('eggplant')

  useEffect( () => {
    getRecipes()
  }, [query]);
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
 
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <p>Enter a food item into the search bar and browse recipes that include that item.</p>
      <form  onSubmit = {getSearch} className = "search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          amount={recipe.recipe.yield}
        />
      ))}
    </div>
  );
};

export default App;