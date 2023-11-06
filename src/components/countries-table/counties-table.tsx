import Link from "next/link";
import Image from "next/image";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import "./countries-table.scss";

type CountryTableProps = {
  countriesData: CountryDataType[];
  isLoading: boolean;
  error: any;
};

function CountryTable({ countriesData, isLoading, error }: CountryTableProps) {
  if (error) return <div>Error: {error.name.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log(countriesData);

  return (
    <div className="country-table">
      <div className="country-table__heading">
        <span>Name</span>
        <span>Capital</span>
        <button>
          Population
          <span>
            <AiOutlineArrowDown />
          </span>
        </button>
        <button>
          Area (km2)
          <span>
            <AiOutlineArrowDown />
          </span>
        </button>
      </div>
      {countriesData.map((country, index) => (
        <Link href={`/country/${country.ccn3}`} key={index}>
          <div className="country-table__row">
            <span>
              <Image
                src={country.flags.svg}
                alt={country.name.common}
                height={33}
                width={50}
              />
              {country.name.common}
            </span>
            <span>{country.capital}</span>
            <span>{country.population}</span>
            <span>{country.area}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CountryTable;
