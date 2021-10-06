import React from "react";
import "./style.scss";

// type ContinentNavBarProps = {
// continents: Array<string>
// }

const ContinentNavBar = () => {
  const continents: Array<string> = [
    "World",
    "Africa",
    "Asia",
    "Europe",
    "North America",
    "South America",
    "Oceania",
  ];

  return (
    <div className="tab">
      {continents.map((continent, index) => {
        return (
          <button key={index} className="tablinks">
            {continent}
          </button>
        );
      })}
      {/* <button
        v-for="(continent, index) in continents"
        :key="index + continent"
        class="tablinks"
        :class="{ 'active-button': continent === getActiveContinent }"
        @click="showContinentCountries(continent)"
      >
        {{ continent }}
      </button> */}
    </div>
  );
};

export default ContinentNavBar;
