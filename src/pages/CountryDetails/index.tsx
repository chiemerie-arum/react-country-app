import React, { useState, useEffect } from "react";
import CountryService from "../../utils/services/CountryService";
import { Country } from "../CountryList";
import "./style.scss";

type CountryDetailsProps = {
  match: {
    params: {
      id: string;
    };
  };
};

export function CountryDetails({ match }: CountryDetailsProps) {
  const [country, setCountry] = useState<Country>({
    name: "",
    flag: "",
    alpha2Code: "",
    capital: "",
  });

  const getCountryByCode = async () => {
    await CountryService.getCountryByCode(match.params.id).then((response) => {
      setCountry(response.data);
    });
  };

  useEffect(() => {
    getCountryByCode();
  }, []);

  return (
    <div className="country-deteails-container">
      <img src={country.flag} alt={country.name} />
      <h1>{country.name}</h1>
    </div>
  );
}

export default CountryDetails;
