import React from 'react';

function Weather({weatherData}) {
    const currentDate = new Date().toLocaleString('default', {weekday: 'short'});
    
    const getWeatherIcon = (day) => {
        const iconCode = weatherData.daily[day].weather[0].icon;
    
        return(
            <img
                src={`https://openweathermap.org/img/wn/${iconCode}.png`}
                alt={weatherData.daily[day].weather[0].description}
            />
        );
    }

    return (
        <div className="weather">
            <div className="forcastBlock currentDay">
                <div className="day">{currentDate}</div>
                <div>{getWeatherIcon(0)}</div>
                <div className="temp">
                    <div className="min">{weatherData.daily[0].temp.min} °</div>
                    <div className="max">{weatherData.daily[0].temp.max} °</div>     
                </div>             
            </div>
            <div className="forcastBlock">
                <div className="day">{currentDate}</div>
                <div>{getWeatherIcon(1)}</div>
                <div className="temp">
                    <div className="min">{weatherData.daily[1].temp.min} °</div>
                    <div className="max">{weatherData.daily[1].temp.max} °</div>     
                </div>             
            </div>
            <div className="forcastBlock">
                <div className="day">{currentDate}</div>
                <div>{getWeatherIcon(2)}</div>
                <div className="temp">
                    <div className="min">{weatherData.daily[2].temp.min} °</div>
                    <div className="max">{weatherData.daily[2].temp.max} °</div>     
                </div>             
            </div>
            <div className="forcastBlock">
                <div className="day">{currentDate}</div>
                <div>{getWeatherIcon(3)}</div>
                <div className="temp">
                    <div className="min">{weatherData.daily[3].temp.min} °</div>
                    <div className="max">{weatherData.daily[3].temp.max} °</div>     
                </div>             
            </div>
            <div className="forcastBlock">
                <div className="day">{currentDate}</div>
                <div>{getWeatherIcon(4)}</div>
                <div className="temp">
                    <div className="min">{weatherData.daily[4].temp.min} °</div>
                    <div className="max">{weatherData.daily[4].temp.max} °</div>     
                </div>             
            </div>
        </div>
    );
}
  
  export default Weather;