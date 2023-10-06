import { useEffect, useState } from "react";

const SearchBar = ({ setSearchBar }) => {
  const [inputValue, setValue] = useState("");
  const handleSearchBar = (e) => {
    e.preventDefault();
    // console.log(inputValue);
    setSearchBar(inputValue);
    setValue("");
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSearchBar}>
        <div className="input-group">
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <input type="submit" value="Search" />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
