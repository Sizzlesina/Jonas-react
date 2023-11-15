/** @format */

import { useEffect } from "react";
import styles from "./City.module.css";
import { useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import Spinner from "./Spinner";
import BackButton from "./BackButton";

const formatDate = (date) =>
  // this method is for date formating
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  // get the id from the parameters which we passed to it in the cityItem component
  const { id } = useParams();
  // get the states from the useCities context which:
  //  getCity : a function that get the city object and set that in the currentCity state
  // currentCity : a state that contains the current city
  const { getCity, currentCity, isLoading } = useCities();

  useEffect(
    function () {
      getCity(id);
    },
    [id,getCity ]
  );
  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target='_blank'
          rel='noreferrer'>
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default City;
