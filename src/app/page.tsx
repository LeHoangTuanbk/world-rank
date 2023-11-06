"use client";
import React from "react";
import { useCountry } from "@/hook/useCountry";
import "./page.scss";
import { CountryTable, FoundCountry, SearchInput } from "@/components";

function Home() {
  const { countryData, isLoading, error } = useCountry(
    "https://restcountries.com/v3.1/all"
  );
  return (
    <div className="container">
      <div className="find-and-search">
        <FoundCountry numberOfCountriesFound={countryData?.length} />
        <div className="search-input-wrapper">
          <SearchInput />
        </div>
      </div>
      <div className="country-table-wrapper">
        <CountryTable
          countriesData={countryData}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
}

export default Home;
