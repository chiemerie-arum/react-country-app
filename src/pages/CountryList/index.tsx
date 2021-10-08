import "./style.scss";
import Content from "../../components/Content";
import CountryService from "../../utils/services/CountryService";
import { useState, useEffect } from "react";

export type Country = {
  name: string;
  flag: string;
  alpha2Code: string;
  capital: string;
  region?: string;
};

export const CountryList = () => {
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
    <div className="country-list-container">
      <Content countries={countries} />
    </div>
  );
};
