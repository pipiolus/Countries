import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import ToggleWeather from "./toggleWeatherButton";
const CapitalWeather = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const [toggleWeather, setToggleWeather] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const api_key = import.meta.env.VITE_API_KEY;
    if (weather === null && toggleWeather) {
      setLoading(true);
      const cap = removeAccents(country.capital[0]);
      const alt = removeDots(country.tld[0]);
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${cap},${alt}&APPID=${api_key}`
        )
        .then((response) => {
          setWeather(response.data);
          setLoading(false);
        })
        .catch((err) => {
          alert(
            `ERROR:${err}. It seems that a problem has ocurred getting the weather. Try again later`
          );
          setLoading(false);
        });
    }
  }, [country, weather, toggleWeather]);

  const removeAccents = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const removeDots = (str) => str.replaceAll(".", "");

  const convertToCelsius = (k) => (k - 273.15).toFixed(2);

  const handleClick = () => {
    toggleWeather === false
      ? setToggleWeather(true)
      : setToggleWeather(false);
  };

  if (toggleWeather === false) {
    return (
      <ToggleWeather country={country} toggleWeather={handleClick} />
    );
  }

  if (loading) {
    return <LoadingSpinner />;
  }
  if (weather !== null) {
    return (
      <div className="weather-container">
        <h2 className="capital-name">
          Weather in {country.capital[0]}
        </h2>
        <p className="capital-info">
          <b>
            Temperature is {convertToCelsius(weather.main.temp)}°
            Celsius
          </b>
        </p>
        <div>
          <p className="capital-info">
            <b>Sky conditions:</b> {weather.weather[0].description}
          </p>
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather-icon"
          />
        </div>
        <p className="capital-info">
          Wind at {weather.wind.speed} m/s
        </p>
        <button className="hide-weather-btn" onClick={handleClick}>
          Hide Weather
        </button>
      </div>
    );
  } else return null;
};
export default CapitalWeather;
