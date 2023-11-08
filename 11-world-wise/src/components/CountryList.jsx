/** @format */

import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountriesList() {
  // get the states from the context values
  const { cities, isLoading } = useCities();

  // if the data isnt loading
  if (isLoading) return <Spinner />;

  // if there is no city
  if (!cities.length)
    return (
      <Message message='Add your first city by clicking on a city on the map' />
    );
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []); 

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountriesList;
