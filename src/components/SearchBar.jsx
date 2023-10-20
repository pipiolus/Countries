const Search = ({ handleSearch }) => {
  return (
    <div className="search-bar">
      Find countries: <input onChange={handleSearch} />
    </div>
  );
};
export default Search;
