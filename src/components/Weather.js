import React from 'react';

function Weather({weatherData}) {
    const currentDate = new Date().toLocaleString('default', {weekday: 'short'});
    
    const getWeatherIcon = () => {
        const iconCode = weatherData.daily[0].weather[0].icon;
    
        return(
            <img
                src={`https://openweathermap.org/img/wn/${iconCode}.png`}
                alt={weatherData.daily[0].weather[0].description}
            />
        );
    }

    return (
        <div className="weather">
            <div className="forcastBlock">
                <div className="day">{currentDate}</div>
                <div>{getWeatherIcon()}</div>
                <div className="temp">
                    <div className="min">{weatherData.daily[0].temp.min} °</div>
                    <div className="max">{weatherData.daily[0].temp.max} °</div>     
                </div>
                               
            </div>


            {/* <div>{weatherData.daily[1].temp.min}</div>
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
            <div>{weatherData.daily[4].weather[0].main}</div> */}
            
        </div>
    );
}
  
  export default Weather;