import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
  return (
    <div className= "recipe"> 
    
      <h2>{title}</h2>
      <p>Total calories: {calories}</p>
      <img src={image} alt="" ></img>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  )
}

export default Recipe