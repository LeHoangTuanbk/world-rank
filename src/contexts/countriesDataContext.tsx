"use client";
import { createContext, useContext } from "react";
import { useCountry } from "../hooks/useCountry";

const { countryData, isLoading, error } = useCountry(
  "https://restcountries.com/v3.1/all"
);

const CountriesDataContext = createContext<CountryDataType[]>(countryData);
