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
    <div className="home">
      <FoundCountry />
      <SearchInput />
      <CountryTable
        countryData={countryData}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}

export default Home;
