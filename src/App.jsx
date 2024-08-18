/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
// eslint-disable-next-line no-unused-vars

import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Header from '../src/components/Header'
import Tabs from '../src/components/Tabs'
import MealList from './components/MealList'
import WeekMeals from './components/WeekMeals'
import './App.css'

import MealContext from './Context/MealContext'

function App() {

  const [items, setItems] = useState([])
  const [activeTab, setActiveTab] = useState('All Meals')
  const [meals, setMeals] = useState([])
  const [filteredList, setFilteredList] = useState([])

  const [selectedMeals, setSelectedMeals] = useState([])

  const [week1,setWeek1] = useState([])
  const [week2,setWeek2] = useState([])
  const [week3,setWeek3] = useState([])
  const [week4,setWeek4] = useState([])

  const getFilteredData = () => {
    const list = []
    meals.map((meal) => {
      const anObj = { "id": meal.id, "name": meal.name, "instructions": JSON.stringify(meal.instructions), "cuisine": meal.cuisine, "image": meal.image, "rating": meal.rating, "isSelected": false }
      list.push(anObj)
    })
    return list

  }
  useEffect(() => {
    axios.get('https://dummyjson.com/recipes')
      .then(response => {
        setMeals(response.data.recipes)
      })
      .catch(error => {console.error('Error fetching meals: ', error)
        alert('Error fetching meals ')
      })
    
    //console.log(filteredList.length)
  }, [])

  useEffect(()=>{
    if (meals.length > 0) {
      // Process meals or trigger other effects based on meals
      setFilteredList(getFilteredData())
     
    }
  }, [meals])

const handleSelectMeal = (mealId, isSelected)=>{
  const updatedList = filteredList.map(meal=> meal.id === mealId ? {...meal, isSelected}: meal)
  setFilteredList(updatedList)

}

  return (
    <MealContext.Provider value = {{filteredList, handleSelectMeal, week1,setWeek1,week2,setWeek2, week3,setWeek3, week4, setWeek4 }}>
    <div className='app'>
      <Header />
      <div className='weekOrders'><h3>Week Orders</h3></div>
      <Tabs activeTab={activeTab.split(" ").join("").toLowerCase()} setActiveTab={setActiveTab}  />

      { activeTab === 'All Meals' ? 
        (<MealList />) 
        : 
        (<WeekMeals week={activeTab.split(" ").join("").toLowerCase()} />)
      } 
    </div>
    </MealContext.Provider>
  )
}

export default App

