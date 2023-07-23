
const SearchBar = ({handleSearch,setSearchText}) => {
    return (
        <div className="mb-5">
  
<div className="flex md:justify-center">
<div>
 <input type="text"  onChange={(e) => setSearchText(e.target.value)} placeholder="Search" className="input input-bordered input-success w-full max-w-xs" />
 </div>
<div>
    <button onClick={handleSearch} className="btn btn-primary ml-3">Search</button>
</div>
</div>

</div>
    );
};

export default SearchBar;