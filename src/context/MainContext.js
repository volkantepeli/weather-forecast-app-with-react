import { createContext, useContext } from 'react';
import { useState } from 'react';
import citiesJSON from '../data/cities_of_turkey.json';


const MainContext = createContext();

export const MainProvider = ({ children }) => {
    
    const [weather, setWeather] = useState([]);
 
    const [city, setCity] = useState(citiesJSON.find(item => item.id === 35));

    const days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
    ];

    const value = {
        city,
        setCity,
        citiesJSON,
        days,
        weather,
        setWeather,
    };
    return (
        <MainContext.Provider value={value}>{children}</MainContext.Provider>
    )
}

export const useMain = () => useContext(MainContext);