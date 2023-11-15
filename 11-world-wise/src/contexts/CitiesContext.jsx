/** @format */

import { useCallback } from "react";
import { createContext, useContext, useEffect, useReducer } from "react";
const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };
    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
}
function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  // fetch city data
  useEffect(function () {
    async function fetchCities() {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        // set the city data inside the state array
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        // Error handling
        dispatch({
          type: "rejected",
          payload: "There was an error loading cities...",
        });
      }
    }
    // calling the function
    fetchCities();
  }, []);
  // get the city data based on id
  const getCity = useCallback(
    async function getCity(id) {
      try {
        dispatch({ type: "loading" });
        // Different API
        // the data in this case is the city object with the id passed to the parameters
        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        // set the data into another object which is a state
        dispatch({ type: "city/loaded", payload: data });
      } catch {
        // error handling
        dispatch({
          type: "rejected",
          payload: "There was an error loading the city...",
        });
      }
    },
    [currentCity.id]
  );

  async function createCity(newCity) {
    try {
      dispatch({ type: "loading" });
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
      dispatch({ type: "city/created", payload: data });
    } catch {
      // Error handling
      dispatch({
        type: "rejected",
        payload: "There was an error creating city ",
      });
    }
  }
  async function deleteCity(id) {
    if (Number(id) === currentCity.id) return;

    try {
      dispatch({ type: "loading" });
      // Different API
      // DELETE the city data from the API
      const res = await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      // filter the cities array and remove the city
      dispatch({ type: "city/deleted", payload: id });
    } catch {
      // Error handling
      dispatch({
        type: "rejected",
        payload: "There was an error deleting the city",
      });
    }
  }

  return (
    // returning a context provider with the values
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
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
