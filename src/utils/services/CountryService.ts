import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://restcountries.com/v2",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const CountryService = {
  getCountries() {
    return apiClient("/all");
  },

  getCountry(country: string) {
    return apiClient(`/name/${country}`);
  },

  getCountryByCode(code: string) {
    return apiClient(`/alpha/${code}`);
  },
};

export default CountryService;
