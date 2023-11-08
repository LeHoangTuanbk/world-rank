"use client";
import React, { useEffect, useState } from "react";
import "./page.scss";
import {
  CountryTable,
  FoundCountry,
  Pagination,
  SearchInput,
} from "@/components";
import { useCountriesDataContext } from "@/contexts/countriesDataContext";

function Home() {
  const { countryData, isLoading, error } = useCountriesDataContext();

  const [tableData, setTableData] = useState<CountryDataType[]>();

  useEffect(() => {
    setTableData(countryData);
  }, [countryData]);

  // console.log(countryData);

  const handleSearchByName = (name: string) => {
    const filteredData = countryData?.filter((country: CountryDataType) =>
      country.name.common.toLowerCase().includes(name.toLowerCase())
    );
    setTableData(filteredData);
  };

  const handleSortCountryData = (order: order, field: field) => {
    const sortedData = tableData?.sort(
      (a: CountryDataType, b: CountryDataType) => {
        if (field === "population") {
          if (order === "asc") {
            return a.population - b.population;
          } else {
            return b.population - a.population;
          }
        } else if (field === "area") {
          if (order === "asc") {
            return a.area - b.area;
          } else {
            return b.area - a.area;
          }
        }
        return 0;
      }
    );
    setTableData(sortedData);
  };

  const [currentPage, setCurrentPage] = useState<number>(1);
  const countriesPerPage = 50;
  const [tableDataPage, setTableDataPage] = useState<
    CountryDataType[] | undefined
  >(undefined);
  // const [numberOfPages, setNumberOfPages] = useState<number>(0);
  let numberOfPages: number;

  useEffect(() => {
    if (tableData) {
      numberOfPages = Math.ceil(tableData?.length / countriesPerPage);
      setTableDataPage(
        tableData?.splice(
          countriesPerPage * (currentPage - 1),
          countriesPerPage * currentPage + 1
        )
      );
    }
  }, []);

  const handleNextPage = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrePage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <div className="find-and-search">
        <FoundCountry
          numberOfCountriesFound={countryData ? countryData?.length : " "}
        />
        <div className="search-input-wrapper">
          <SearchInput handleSearchByName={handleSearchByName} />
        </div>
      </div>
      <div className="country-table-wrapper">
        <CountryTable
          countriesData={tableData}
          isLoading={isLoading}
          error={error}
          handleSortCountryData={handleSortCountryData}
        />
      </div>
      {/* <div>
        <Pagination
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          prePage={handlePrePage}
          nextPage={handleNextPage}
          goToPage={goToPage}
        />
      </div> */}
    </div>
  );
}
export default Home;
