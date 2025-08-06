import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import sunny_icon from '../assets/sun.png'


const Weather = () => {
  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text"  placeholder='search'/>
        <img src={search_icon} />
      </div>
      <img src={sunny_icon} alt="" className='weather-icon' />
      <p className='temprature'>30&deg;</p>
      <p className='location'>London</p>
      
    </div>
  )
}

export default Weather
