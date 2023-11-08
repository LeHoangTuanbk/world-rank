"use client";
import { createContext, useContext } from "react";
import { useCountry } from "../hooks/useCountry";

type CountriesDataContextType = {
  countryData: CountryDataType[] | undefined;
  isLoading: boolean;
  error: any;
};

const CountriesDataContext = createContext<
  CountriesDataContextType | undefined
>(undefined);

type CountriesDataContextProviderProps = {
  children: React.ReactNode;
};

export const CountriesDataContextProvider = ({
  children,
}: CountriesDataContextProviderProps) => {
  const contextValue = useCountry("https://restcountries.com/v3.1/all");
  return (
    <CountriesDataContext.Provider value={contextValue}>
      {children}
    </CountriesDataContext.Provider>
  );
};

export const useCountriesDataContext = () => {
  const context = useContext(CountriesDataContext);
  if (context === undefined) {
    throw new Error(
      "useCountriesDataContext must be used within a CountriesDataContextProvider"
    );
  }
  return context;
};
