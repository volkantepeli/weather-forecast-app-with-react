import React from 'react'
import {useMain} from '../context/MainContext'

function Header() {
  const { city, setCity, citiesJSON } = useMain();

  const changeCity = (e) => {
    citiesJSON.filter((item) => {
      if (item.name == e.target.value) {
        setCity(item);
      }
    });
  };

  return (
    <div>
      <select
        name="cities"
        id="cities"
        value={city.name}
        onChange={changeCity}
      >
        {citiesJSON.map((item, i) => {
          return (
            <option value={item.name} key={i}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Header