import { Country } from "../../App";
import "./style.scss";

const CountryCard = (country: Country) => (
  <article className="country__container">
    <div className="country__summary">
      <p className="country__name">
        <span className="country__alpha"> {country.alpha2Code} </span>
        {country.name}
      </p>
      <p className="country__capital">{country.capital}</p>
    </div>
    <img className="country__flag" src={country.flag} alt="" />
  </article>
);

export default CountryCard;
