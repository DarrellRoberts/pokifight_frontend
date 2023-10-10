import { Input, Space } from "antd";
import { useEffect, useState } from "react";

const SearchBar = ({ setSearchBar }) => {
  const [inputValue, setValue] = useState("");
  const { Search } = Input;
  const handleSearchBar = (e) => {
    e.preventDefault();
    setSearchBar(inputValue);
    setValue("");
  };

  const capitaliseFirst = (e) => e.charAt(0).toUpperCase() + inputValue.slice(1);
  const handleInputChange = (e) => {
    setValue(e.target.value);
    setSearchBar(capitaliseFirst(e.target.value));
  };

  

  return (
    <>
    <Space direction="vertical">
      <Search
      onSubmit={handleSearchBar}
      placeholder="Search for pokemon"
      allowClear
      enterButton="Search"
      style={{textTransform: "capitalize"}}
      size="large"
      onChange={handleInputChange}
    />
      {/* <form onSubmit={handleSearchBar}>
        <div className="input-group">
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <input type="submit" value="Search" />
        </div>
      </form> */}
    </Space> 
    </>
  );
};

export default SearchBar;
