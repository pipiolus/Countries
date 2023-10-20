const ToggleWeather = ({ toggleWeather, country }) => {
  return (
    <div
      className="weather-container"
      id="open-weather"
      onClick={toggleWeather}
    >
      <h3>See real time Weather in {country.capital[0]} here!</h3>
    </div>
  );
};
export default ToggleWeather;
