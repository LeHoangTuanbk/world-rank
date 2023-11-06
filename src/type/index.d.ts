type CountryDataType = {
  id: number;
  iid: {
    root: string;
  };
  capital: string[];
  flag: {
    png: string;
    svg: string;
  };
  languages: {
    [key: string]: string;
  };
  name: {
    common: string;
    official: string;
  };
  currencies: {
    [key: string]: {
      [key: string]: string;
      [key: string]: string;
    };
  };
  border?: string[];
  area: number;
  region: string;
  maps: {
    googleMaps: string;
  };

  subregion: string;
  population: number;
};
