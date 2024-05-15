import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="input-with-icon">
      <span className="input-icon text-primary d-flex align-items-center">
        <AiOutlineSearch />
      </span>
      <input
        className="input-search"
        type="text"
        placeholder="Search"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
