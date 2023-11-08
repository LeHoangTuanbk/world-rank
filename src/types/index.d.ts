type CountryDataType = {
  id: number;
  iid: {
    root: string;
  };
  ccn3: string;
  capital?: string[];
  flags: {
    png: string;
    svg: string;
  };
  languages: {
    [key: string]: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  borders?: string[];
  area: number;
  region: string;
  maps: {
    googleMaps: string;
  };

  subregion: string;
  population: number;
};

type order = "asc" | "desc";
type field = "population" | "area";
