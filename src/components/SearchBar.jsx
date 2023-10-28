const Search = ({ handleSearch }) => {
  return (
    <div className="search-bar">
      Find countries: <input type="search" onChange={handleSearch} />
    </div>
  );
};
export default Search;
