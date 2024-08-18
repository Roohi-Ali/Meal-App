/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

const Card = ({meal, onSelectMeal}) => {

  // const mealValues = Object.values(meal)
  // const [mealValues, setMealValues] = useState(Object.values(meal));
  const [isSelected, setIsSelected] = useState(meal.isSelected)

  const handleClick = (mealId)=>{
    
    const newIsSelected = !isSelected;
    setIsSelected(newIsSelected);
    onSelectMeal(meal.id, newIsSelected)

   
  }
  
  return (
    <div className={`mealCard ${isSelected === true ? 'selected': null}`}
        
        onClick={()=>handleClick(meal.id)} >
      <ul>
        <li className='imgDiv'><img src={meal.image} alt="" /></li>
        
        <li><h3>{meal.name}</h3></li>
        <li><p>{JSON.parse(meal.instructions)}</p></li>
        <li>
            <div className='cardFooter'>
                <p>Cuisine: {meal.cuisine}</p>
                <p>Rating: {meal.rating}</p>
            </div>
        </li>
        
          
      </ul>
    </div>
  )
}


export default Card

