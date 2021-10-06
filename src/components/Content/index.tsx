import React from "react";
import { Country } from "../../App";
import CountryCard from "../CountryCard";
import ContinentNavBar from "../ContinentNavBar";
import "./style.scss";

type ContentProps = {
  countries: Array<Country>;
};

const Content = ({ countries }: ContentProps) => {
  const list = countries.map((country: Country, index) => {
    console.log("country:", country);
    return (
      <CountryCard
        name={country.name}
        flag={country.flag}
        alpha2Code={country.alpha2Code}
        capital={country.capital}
      />
    );
  });
  return (
    <div className="content-container">
      <ContinentNavBar />
      <div className="content-container__cards">{list}</div>
    </div>
  );
};

export default Content;
