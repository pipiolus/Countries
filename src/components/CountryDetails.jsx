import CapitalWeather from "./CapitalWeather";
import helper from "../helper";

const CountryDetails = ({ country }) => {
  const languages = Object.values(country.languages);
  return (
    <div className="details-container">
      <h1 className="country-name">{country.name.common}</h1>
      <div className="flag-container">
        <div className="flag">{country.flag}</div>
      </div>
      <div>
        <p className="info">Continent: {country.continents}</p>
        <p className="info">Capital: {country.capital}</p>
        <p className="info">
          Area: {helper.digitFormatter(country.area)} km²
        </p>
        <p className="info">
          Population: {helper.digitFormatter(country.population)}
        </p>
      </div>
      <div>
        <h2>Languages:</h2>
        <div>
          {languages.map((lang, index) => (
            <p className="lang-info" key={index}>
              {lang}
            </p>
          ))}
        </div>
      </div>
      <CapitalWeather country={country} />
    </div>
  );
};
export default CountryDetails;
