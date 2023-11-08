import { CountriesDataContextProvider } from "@/contexts/countriesDataContext";

export default function CountryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CountriesDataContextProvider>{children}</CountriesDataContextProvider>
  );
}
