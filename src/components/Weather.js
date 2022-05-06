import React from 'react';

export default function Weather({weatherData}) {
    
    const currentDate = new Date().toLocaleString('default', {weekday: 'short'});
    const forecastArr = weatherData.daily.slice(0,5);

    const getWeatherIcon = (day) => {
        const iconCode = weatherData.daily[day].weather[0].icon;
    
        return(
            <img
                src={`https://openweathermap.org/img/wn/${iconCode}.png`}
                alt={weatherData.daily[day].weather[0].description}
            />
        );
    }

    const getForecast = 
        forecastArr.map((day, i) => 
            <div className="forcastBlock" key={`day${i}`}>
                <div className="day">{currentDate}</div>
                <div>{getWeatherIcon(i)}</div>
                <div className="temp">
                    <div className="min">{Math.trunc(day.temp.min)} °</div>
                    <div className="max">{Math.trunc(day.temp.max)} °</div>     
                </div>             
            </div>
        );

    return (
        <div className="weather">
            <div className="weatherCont">
                {getForecast} 
            </div>
        </div>
    );
}