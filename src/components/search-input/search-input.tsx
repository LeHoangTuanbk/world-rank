import { AiOutlineSearch } from "react-icons/ai";
import "./search-input.scss";

function SearchInput() {
  return (
    <div className="search-input">
      <AiOutlineSearch className="search-input__icon" size={30} />
      <input type="text" placeholder="Search by name" />
    </div>
  );
}

export default SearchInput;
