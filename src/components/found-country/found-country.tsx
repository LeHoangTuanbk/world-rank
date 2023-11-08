import React from "react";
import "./found-country.scss";

type FoundCountryProps = {
  numberOfCountriesFound: number | string;
};

function FoundCountry({ numberOfCountriesFound }: FoundCountryProps) {
  return (
    <div className="found-country">Found country: {numberOfCountriesFound}</div>
  );
}

export default FoundCountry;
