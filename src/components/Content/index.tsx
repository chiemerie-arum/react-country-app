import { useState } from "react";
import { Country } from "../../App";
import FilterBar from "../FilterBar";
import CountryCard from "../CountryCard";
import "./style.scss";

type ContentProps = {
  countries: Array<Country>;
};

const Content = ({ countries }: ContentProps) => {
  const [regionFilter, setRegionFilter] = useState("");

  const unFilteredCountries = countries;

  const filteredCountries = countries.filter(
    (country) => country.region === regionFilter
  );

  const countryListToDisplay = !!regionFilter.length
    ? filteredCountries
    : unFilteredCountries;

  return (
    <div className="content-container">
      {console.log(regionFilter)}
      <FilterBar
        onClick={(continent) =>
          continent === "World"
            ? setRegionFilter("")
            : setRegionFilter(continent)
        }
      />
      <div className="content-container__cards">
        {countryListToDisplay.map((country: Country) => (
          <CountryCard
            name={country.name}
            flag={country.flag}
            alpha2Code={country.alpha2Code}
            capital={country.capital}
            key={country.alpha2Code}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
