import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header, Footer } from "@/components";
import { CountriesDataContextProvider } from "@/contexts/countriesDataContext";
import "./globals.scss";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CountriesDataContextProvider>
          <Header />
          {children}
          <Footer />
        </CountriesDataContextProvider>
      </body>
    </html>
  );
}
