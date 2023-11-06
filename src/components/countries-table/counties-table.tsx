type CountryTableProps = {
  countriesData: CountryDataType[];
  isLoading: boolean;
  error: any;
};

function CountryTable({ countriesData, isLoading, error }: CountryTableProps) {
  if (error) return <div>Error: {error.name.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log(countriesData);

  return <div>CountryTable</div>;
}

export default CountryTable;
