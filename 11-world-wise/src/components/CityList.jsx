/** @format */

import styles from "./CityList.module.css";
import Spinner from "../components/Spinner";
import CityItem from "./CityItem";
import Message from "../components/Message";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  // get the states from the context value
  const { cities, isLoading } = useCities();
  // if the data isnt loading yet
  if (isLoading) return <Spinner />;
  // if there is no cities
  if (!cities.length)
    return (
      <Message message='Add your first city by clicking on a city on the map' />
    );
  return (
    // for every city return a li => ul is here and li is on another component
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
