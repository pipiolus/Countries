import CountryDetails from "./CountryDetails";

const CountrysList = ({ countries, show }) => {
  if (countries.length === 250) {
    return (
      <div>
        {countries.map((country) => (
          <div className="listed-country" key={country.fifa}>
            <span>{country.flag}</span> <p>{country.name.common}</p>
            <button
              className="show-btn"
              onClick={() => show(country.name.common)}
            >
              show
            </button>
          </div>
        ))}
      </div>
    );
  }

  if (countries.length === 1) {
    const country = countries[0];
    return (
      <>
        <CountryDetails country={country} />
      </>
    );
  } else if (countries.length > 1 && countries.length < 10) {
    return (
      <div>
        {countries.map((country) => (
          <div className="listed-country" key={country.fifa}>
            <span>{country.flag}</span> <p>{country.name.common}</p>
            <button
              className="show-btn"
              onClick={() => show(country.name.common)}
            >
              show
            </button>
          </div>
        ))}
      </div>
    );
  } else if (countries.length >= 10) {
    return (
      <div>
        <h4>Too many matches. Please be more specific...</h4>
      </div>
    );
  } else return null;
};
export default CountrysList;
