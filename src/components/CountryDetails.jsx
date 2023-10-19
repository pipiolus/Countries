import CapitalWeather from "./CapitalWeather";

const CountryDetails = ({ country }) => {
  const languages = Object.values(country.languages);
  return (
    <div>
      <h1 className="country-name">{country.name.common}</h1>
      <div>
        <p className="info">Continent: {country.continents}</p>
        <p className="info">Capital: {country.capital}</p>
        <p className="info">Area: {country.area} km²</p>
        <p className="info">Population: {country.population}</p>
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
      <div>
        <h2>Flag:</h2>
        <div className="flag">{country.flag}</div>
        <CapitalWeather country={country} />
      </div>
    </div>
  );
};
export default CountryDetails;
