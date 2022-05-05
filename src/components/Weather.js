import React from 'react';

function Weather({weatherData}) {
    return (
        <div className="weather">
            <div>{weatherData.daily[0].temp.min}</div>
            <div>{weatherData.daily[0].temp.max}</div>
            <div>{weatherData.daily[0].weather[0].main}</div>

            <div>{weatherData.daily[1].temp.min}</div>
            <div>{weatherData.daily[1].temp.max}</div>
            <div>{weatherData.daily[1].weather[0].main}</div>

            <div>{weatherData.daily[2].temp.min}</div>
            <div>{weatherData.daily[2].temp.max}</div>            
            <div>{weatherData.daily[2].weather[0].main}</div>

            <div>{weatherData.daily[3].temp.min}</div>
            <div>{weatherData.daily[3].temp.max}</div>
            <div>{weatherData.daily[3].weather[0].main}</div>

            <div>{weatherData.daily[4].temp.min}</div>
            <div>{weatherData.daily[4].temp.max}</div>
            <div>{weatherData.daily[4].weather[0].main}</div>
            
        </div>
    );
}
  
  export default Weather;