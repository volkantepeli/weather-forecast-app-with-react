import axios from 'axios';
import { useEffect } from 'react';
import { useMain } from '../context/MainContext';

function Days() {
    const { days, weather, setWeather, city } = useMain();
    useEffect(() => {
        const api_key = '9c170962396d15fdb67f376d030f4335';
        const getData = async () => {
          const res = axios(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude={part}&appid=${api_key}`,
          );
          console.log((await res).data.daily)
          setWeather((await res).data.daily);
        };
        getData();
      }, [city, setWeather]);
      return (
        <div>
          {weather.map((item, i) => {
            return ( 
                <div key={i}> 
                    <div >
                      {days[
                        new Date(item.dt * 1000).getDay()
                      ]}
                    </div>
                    <img
                      className="day-img"
                      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                      alt={item.weather[0].description.toUpperCase()}
                      title={item.weather[0].description.toUpperCase()}
                    /> 
                    <div > 
                        <span className="tmp-high">
                        {Math.round(item.temp['max'] - 273.15)}
                        &deg;
                        </span> 
                        <span>
                        {Math.round(item.temp['min'] - 273.15)}
                        &deg;
                        </span> 
                    </div>
                </div> 
            );
          })}
        </div>
      );
}

export default Days