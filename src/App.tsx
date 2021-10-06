import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import CountryService from "./utils/services/CountryService";
import { useState, useEffect } from "react";

export type Country = {
  name: string;
  flag: string;
  alpha2Code: string;
  capital: string;
  region?: string;
};

function App() {
  const getCountries = async () => {
    await CountryService.getCountries().then((response) => {
      setCountries(response.data);
    });
  };

  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Content countries={countries} />
      <Footer />
    </div>
  );
}

export default App;
