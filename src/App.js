import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/Weather';

export default function App() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
  
  return (
    <div className="App">
      {(typeof data.daily != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div className='rotate-center'>Loading</div>
      )}
      
    </div>
  );
}