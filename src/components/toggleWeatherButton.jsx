const ToggleWeather = ({ toggleWeather, country }) => {
  return (
    <div
      className="weather-container open-weather"
      onClick={toggleWeather}
    >
      <h3>See real time Weather in {country.capital} here!</h3>
    </div>
  );
};
export default ToggleWeather;
