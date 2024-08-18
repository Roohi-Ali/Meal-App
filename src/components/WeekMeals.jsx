/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react'
import Card from './Card'
import MealContext from '../Context/MealContext'

const WeekMeals = ({ week }) => {

    const { week1, week2, week3, week4 } = useContext(MealContext)

    const [mealArray, setMealArray] = useState([])

    useEffect(() => {
        switch (week) {
            case 'week1':
                setMealArray(week1);
                break;
            case 'week2':
                setMealArray(week2);
                break;
            case 'week3':
                setMealArray(week3);
                break;
            case 'week4':
                setMealArray(week4);
                break;
            default:
                console.log(week)
        }

    }, [week, week1, week2, week3, week4])



    return (
        <div >
            <div className='divMeals'>

                {mealArray.map((el) => (
                    <Card key={el.id} meal={el} onSelectMeal = {null}/>
                ))
                }

            </div>
        </div>
    )
}

export default WeekMeals
