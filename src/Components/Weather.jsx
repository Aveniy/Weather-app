import React, { useEffect,useRef,useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import sunny_icon from '../assets/sun.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'
import cloudy_icon from '../assets/cloudy.png'
import rain_icon from '../assets/rain.png'
import drizzle_icon from '../assets/drizzle.png'
import snow_icon from '../assets/snow.png'


const Weather = () => {

  const inputRef = useRef()
  const [weatherData, setWeatherData] = useState(false);
  const allIcons= {
    "01d":sunny_icon,
    "01n": sunny_icon,
    "02d": cloudy_icon,
    "02n": cloudy_icon,
    "03d": cloudy_icon,
    "03n": cloudy_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  }
  const search = async (city) => {
    if (city === "") {
      alert('Enter City Name')
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;


      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || sunny_icon
      setWeatherData({
        humidity:data.main.humidity,
        windSpeed:data.wind.speed,
        temprature:Math.floor(data.main.temp),
        location: data.name,
        icon: icon
      })
      
    } catch (error) {
      setWeatherData(false);
      console.error("Error in fetching weather data")
      
    }
  }
  useEffect(()=>{
    search("Addis Ababa");
  },[])


  return (
    <div className='weather'>
      <div className="search-bar">
        <input ref={inputRef} type="text"  placeholder='search'/>
        <img src={search_icon} onClick={()=>search(inputRef.current.value)} />
      </div>
      {weatherData?<>
      <img src={weatherData.icon} alt="" className='weather-icon' />
      <p className='temprature'>{weatherData.temprature}&deg;</p>
      <p className='location'>{weatherData.location}</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="" />
          <div>
            <p>{weatherData.humidity} %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="" />
          <div>
            <p>{weatherData.windSpeed} Km/hr</p>
            <span>Wind speed</span>
          </div>
        </div>
      </div>
      
      
      </>:<></>}
      
    </div>
  )
}

export default Weather
