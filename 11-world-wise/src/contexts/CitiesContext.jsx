/** @format */

import { createContext, useContext, useEffect, useState } from "react";
const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});


  // fetch city data
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        // set the city data inside the state array
        setCities(data);
      } catch {
        // Error handling
        alert("There was an error loading data...");
      } finally {
        // setIsLoading is off on all the effect except one place
        setIsLoading(false);
      }
    }
    // calling the function
    fetchCities();
  }, []);
  // get the city data based on id
  async function getCity(id) {
    try {
      setIsLoading(true);
      // Different API
      // the data in this case is the city object with the id passed to the parameters
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      // set the data into another object which is a state
      setCurrentCity(data);
    } catch {
      // error handling
      alert("There was an error loading data...");
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity) {
    try {
      setIsLoading(true);
      // Different API
      // POST the stringified new city to the API
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // add the data to the cities state and create an array of old states and new state values
      setCities((cities) => [...cities, data]);
    } catch {
      // Error handling
      alert("There was an error creating city ");
    } finally {
      setIsLoading(false);
    }
  }
  async function deleteCity(id) {
    try {
      setIsLoading(true);
      // Different API
      // DELETE the city data from the API
      const res = await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      // filter the cities array and remove the city
      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch {
      // Error handling
      alert("There was an error deleting city");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    // returning a context provider with the values 
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}>
      {children}
    </CitiesContext.Provider>
  );
}
function useCities() {
  // return a use context function to use the values
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}
export { CitiesProvider, useCities };

