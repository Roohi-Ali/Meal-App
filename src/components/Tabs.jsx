/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useEffect, useState, useContext } from 'react'
import MealContext from '../Context/MealContext'

const Tabs = ({activeTab, setActiveTab}) => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const tabsArray = ['All Meals','Week 1','Week 2','Week 3','Week 4']
  const {filteredList,setWeek1,setWeek2,setWeek3,setWeek4} = useContext(MealContext)
  
  
  useEffect(() => {
    console.log("Active Tab:", activeTab);
  }, [activeTab]);

  const openModal = () => {
    setIsModalOpen(true)
    
  }
  const closeModal = ()=>{
    setIsModalOpen(false)
  }

  
  const handleWeekSelection = (aWeek)=>{
      console.log(aWeek)
      const weekList = filteredList.filter((meal)=> meal.isSelected )

      const objWeekSetters ={
        'week1' : setWeek1,
        'week2' : setWeek2,
        'week3' : setWeek3,
        'week4' : setWeek4
      }

      if (objWeekSetters[aWeek]){
        objWeekSetters[aWeek](weekList)
        alert( 'Added to Week' )
        setIsModalOpen(false)
        //setting meal isSelected field to false
        filteredList.map((meal)=>{
          meal.isSelected = false
        })
      }else{
        console.log('Invalid Week Selected')
      }
      
  }
  // const handleSave = ()=>{
    
  //   setIsModalOpen(false)
  // }
  return (
    <div className='tabs'>
      <ul className='tab-list'>
        <div className='extra'>
        {
          tabsArray.map((tab, index)=>(
            <li key={index}
              onClick={()=>setActiveTab(tab)}
              className={activeTab===tab.split(" ").join("").toLowerCase() ? 'active': ''} >{tab}
            </li>
          ))
        }
        <li><button className="addToWeekBtn" disabled = {activeTab != 'allmeals'} onClick={()=>{openModal()}}>Add to Week Button</button></li>

        {isModalOpen && (
        <div className="modal">
          <h2>Select a Week</h2>
          <button onClick={() => handleWeekSelection('week1')}>Week 1</button>
          <button onClick={() => handleWeekSelection('week2')}>Week 2</button>
          <button onClick={() => handleWeekSelection('week3')}>Week 3</button>
          <button onClick={() => handleWeekSelection('week4')}>Week 4</button>
          
          <button onClick={closeModal}>Close</button>
        </div>
      )}

        </div>
      </ul>




    </div>
  )
}

export default Tabs
