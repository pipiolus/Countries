import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/SearchBar";
import CountrysList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [countryDetails, setCountryDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (countries.length === 0) {
      setLoading(true);
      axios
        .get("https://studies.cs.helsinki.fi/restcountries/api/all")
        .then((response) => response.data)
        .then((allCountries) => {
          setLoading(false);
          setCountries(allCountries);
        })
        .catch((err) =>
          alert(
            `ERROR:${err}. It seems that a problem has ocurred. Try reloading the page`
          )
        );
    }
  }, [countries]);

  useEffect(() => {
    setCountryDetails(null);
  }, [search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filterArr = (arr, str) => {
    return arr.filter((obj) =>
      obj.name.common.toLowerCase().match(str.toLowerCase())
    );
  };
  const filteredCountries = filterArr(countries, search);

  const showCountryDetails = (country) => {
    setLoading(true);
    axios
      .get(
        `https://studies.cs.helsinki.fi/restcountries/api/name/${country}`
      )
      .then((response) => {
        setLoading(false);
        setCountryDetails(response.data);
      });
  };

  if (loading) {
    return (
      <div className="container">
        <div className="content">
          <h1 className="title">Data For Countries</h1>
          <Search value={search} handleSearch={handleChange} />
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Data For Countries</h1>
        <Search value={search} handleSearch={handleChange} />
        {countryDetails !== null ? (
          <CountryDetails country={countryDetails} />
        ) : (
          <CountrysList
            countries={filteredCountries}
            show={showCountryDetails}
          />
        )}
      </div>
    </div>
  );
}

export default App;
