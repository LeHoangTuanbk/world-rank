import { AiOutlineSearch } from "react-icons/ai";
import "./search-input.scss";

type SearchInPutProps = {
  handleSearchByName: (name: string) => void;
};

function SearchInput({ handleSearchByName }: SearchInPutProps) {
  const onChangeSearchByName = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value: string = e.target.value;
    handleSearchByName(value);
  };
  return (
    <div className="search-input">
      <AiOutlineSearch className="search-input__icon" size={30} />
      <input
        type="text"
        placeholder="Search by name"
        onChange={onChangeSearchByName}
      />
    </div>
  );
}

export default SearchInput;
