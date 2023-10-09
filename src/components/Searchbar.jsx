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

  const handleInputChange = (e) => {
    setValue(e.target.value);
    setSearchBar(e.target.value);
  };

  return (
    <>
    <Space direction="vertical">
      <Search
      onSubmit={handleSearchBar}
      placeholder="input search text"
      allowClear
      enterButton="Search"
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
