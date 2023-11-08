"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import "./countries-table.scss";

type CountryTableProps = {
  countriesData: CountryDataType[] | undefined;
  isLoading: boolean;
  error: any;
  handleSortCountryData: (order: order, field: field) => void;
};

function CountryTable({
  countriesData,
  isLoading,
  error,
  handleSortCountryData,
}: CountryTableProps) {
  const [populationOrder, setPopulationOrder] = useState<order>("asc");
  const [areaOrder, setAreaOrder] = useState<order>("asc");

  if (error) return <div>Error: {error.name.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  const changePopulationOrder = () => {
    if (populationOrder === "asc") {
      setPopulationOrder("desc");
      handleSortCountryData("desc", "population");
    } else {
      setPopulationOrder("asc");
      handleSortCountryData("asc", "population");
    }
  };

  const changeAreaOrder = () => {
    if (areaOrder === "asc") {
      setAreaOrder("desc");
      handleSortCountryData("desc", "area");
    } else {
      setAreaOrder("asc");
      handleSortCountryData("asc", "area");
    }
  };

  return (
    <div className="country-table">
      <div className="country-table__heading">
        <span>Name</span>
        <span>Capital</span>
        <button onClick={changePopulationOrder}>
          Population
          <span>
            {populationOrder === "desc" ? (
              <AiOutlineArrowUp />
            ) : (
              <AiOutlineArrowDown />
            )}
          </span>
        </button>
        <button onClick={changeAreaOrder}>
          Area (km²)
          <span>
            {areaOrder === "desc" ? (
              <AiOutlineArrowUp />
            ) : (
              <AiOutlineArrowDown />
            )}
          </span>
        </button>
      </div>
      {countriesData?.map((country, index) => (
        <Link href={`/country/${country.ccn3}`} key={index}>
          <div className="country-table__row">
            <span className="country-table__name">
              <Image
                src={country.flags.svg}
                alt={country.name.common}
                height={33}
                width={50}
              />
              {country.name.common}
            </span>
            <span>{country.capital}</span>
            <span>{country.population.toLocaleString()}</span>
            <span>{country.area.toLocaleString()}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CountryTable;
