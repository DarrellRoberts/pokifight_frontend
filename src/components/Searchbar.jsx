import { Input, Space } from "antd";
import { useEffect, useState } from "react";

const SearchBar = ({ setSearchBar }) => {
  const [inputValue, setValue] = useState("");
  const { Search } = Input;
  // const handleSearchBar = (e) => {
  //   e.preventDefault();
  //   setSearchBar(inputValue);
  //   setValue("");
  // };

  const capitaliseFirst = (e) => e.charAt(0).toUpperCase() + inputValue.slice(1);
  
  const onSearch = (e) => {
    setSearchBar(capitaliseFirst(inputValue));
    setValue("");
  };
  
  const handleInputChange = (e) => {
    setValue(e.target.value);
    setSearchBar(capitaliseFirst(e.target.value));
  };

  return (
    <>
    <Space direction="vertical">
      <Search
      onSearch={onSearch}
      placeholder="Search for pokemon"
      allowClear
      value={inputValue}
      enterButton="Search"
      size="large"
      onChange={handleInputChange}
    />
      </Space>
      {/* <form onSubmit={handleSearchBar}>
        <div className="input-group">
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <input type="submit" value="Search" />
        </div>
      </form> */}
  
    </>
  );
};

export default SearchBar;
