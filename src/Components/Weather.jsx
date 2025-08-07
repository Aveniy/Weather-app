import React, { useEffect } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import sunny_icon from '../assets/sun.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'


const Weather = () => {
  const search = async (city) => {
    try {
      const url = `https://api.weatherstack.com/current?access_key=${import.meta.env.VITE_APP_ID}&query=${city};`

      const response = await fetch(url);
      const data = await response.json();
      console.log(response);
      
    } catch (error) {
      
    }
  }
  useEffect(()=>{},[])
  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text"  placeholder='search'/>
        <img src={search_icon} />
      </div>
      <img src={sunny_icon} alt="" className='weather-icon' />
      <p className='temprature'>30&deg;</p>
      <p className='location'>London</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" />
          <div>
            <p>91 %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" />
          <div>
            <p>3.6 Km/hr</p>
            <span>Wind speed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
