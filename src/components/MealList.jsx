/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React, { useContext} from 'react'
import Card from './Card'

import MealContext from '../Context/MealContext'


const MealList = () => {

    const {filteredList, handleSelectMeal} = useContext(MealContext)
    
    return (
        <div >
           <div className='divMeals' >
            {
                filteredList.map((el)=>
                    (
                    <Card key={el.id} 
                        meal={el} 
                        onSelectMeal = {handleSelectMeal}
                        />
                )
            )
            }     
           </div>
        </div>
    )
}

export default MealList