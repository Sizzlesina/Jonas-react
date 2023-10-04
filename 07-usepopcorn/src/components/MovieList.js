/** @format */

import { useState } from "react";
import { tempMovieData } from "./App";
import  Movie  from "./Movie";

export default function MovieList({movies}) {

  return (
    <ul className='list'>
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
