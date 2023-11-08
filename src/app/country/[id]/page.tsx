"use client";
import { useCountriesDataContext } from "@/contexts/countriesDataContext";

import "./page.scss";
import Link from "next/link";

type CountryDetailProps = {
  params: {
    id: string;
  };
};

function CountryDetail({ params }: CountryDetailProps) {
  let { countryData, isLoading, error } = useCountriesDataContext();

  countryData = countryData?.filter(
    (country) => country.ccn3 === params.id
  ) as CountryDataType[];

  if (isLoading) return <div className="container">Loading...</div>;
  if (error)
    return <div className="container">Error: {error.name.message}</div>;
  countryData = countryData?.filter(
    (country) => country.ccn3 === params.id
  ) as CountryDataType[];

  const countryDataDetail: CountryDataType = countryData[0];
  console.log(countryData);
  let currencyList = [];
  for (let currency in countryDataDetail.currencies) {
    currencyList.push(
      countryDataDetail.currencies[currency].name +
        `(${countryDataDetail.currencies[currency].symbol})` +
        " "
    );
  }
  let nativeName: string = "";
  for (let name in countryDataDetail.name.nativeName) {
    nativeName = countryDataDetail.name.nativeName[name].common;
  }

  return (
    <div className="container">
      <div className="country-detail-container">
        <div className="country-general">
          <div className="flag">
            <img
              src={countryDataDetail.flags.svg}
              alt={`${countryDataDetail.name.common}'s flag`}
            />
          </div>
          <div className="common-name">{countryDataDetail.name.common}</div>
          <div className="region">{countryDataDetail.region}</div>
          <div className="population-and-area">
            <span className="population">
              <div>{countryDataDetail.population.toLocaleString()}</div>
              <div className="| secondary-color-text">Population</div>
            </span>
            <span className="area">
              <div>{countryDataDetail.area.toLocaleString()}</div>
              <div className="| secondary-color-text">Area: km²</div>
            </span>
          </div>
        </div>
        <div className="country-detail">
          <h3 className="country-detail__title | p-4">Detail</h3>
          <div className="country-detail__content">
            <div className="capital | p-4">
              <span>Capital</span>
              <span>{countryDataDetail.capital}</span>
            </div>{" "}
            <div className="subregion | p-4">
              <span>Subregion</span>
              <span>{countryDataDetail.region}</span>
            </div>
            <div className="languages | p-4">
              <span>Languages</span>
              <span>
                {Object.values(countryDataDetail.languages).join(", ")}
              </span>
            </div>
            <div className="currencies | p-4">
              <span>Currencies</span>
              <span>
                {currencyList.map((currency, index) => (
                  <span key={index}>{currency}</span>
                ))}
              </span>
            </div>
            <div className="native-name | p-4">
              <span>Native name</span>
              <span>{nativeName}</span>
            </div>
            <div className="map-link | p-4">
              <span>Google maps</span>
              <a href={countryDataDetail.maps.googleMaps}>
                {countryDataDetail.maps.googleMaps}
              </a>
            </div>
            <div className="neighbor-countries | p-4">
              <span>Neighbor countries</span>
              <span>{countryDataDetail.borders?.join(", ")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="link-container">
        <Link href="/">Back to homepage</Link>
      </div>
    </div>
  );
}

export default CountryDetail;
