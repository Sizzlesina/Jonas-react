<!-- @format -->

# Code analyze:

# line 66 to 69 StarRating component:

        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}

👉 it checks if the message that we will pass as a prop to the component(if we need to) is the same length as the length of the stars?
if the condition was true then it will render the index values of the array that we give it as a prop and instead of the number of the star that we hover on or maybe clicked show us the value that is in that index array. If we dont have the same array length as the stars then it will render the star numbers and show them as default.

# a communication between the MovieDetails component and WatchedMovie component:

1 - we have a prop called onAddWatched which is a function in the parent component which returns a new array based on the object that will receives and add the new object to a new array that has the previous values it means => [old values, + new value]

2 - in MovieDetails component we destruct the onAddWatched prop and in another function called handleAdd we will call the prop and save a new value to it which is:

const newWatchedMovie = {
imdbID: selectedId,
title,
year,
poster,
imdbRating: Number(imdbRating),
runtime: Number(runtime.split(" ").at(0)),
userRating,
};

3 - this new value will be set to the setWatched state in the parent component (by onAddWatched which creates a new array)
4 - the new array will be sent to the WatchedMovieList component and the map method will be called on it and a new "movie" object will be created for each of the values.
5 - the values will be sent to the WatchedMovie component and some JSX rendering will be happened for them

# in every component:

in every componentt we may need some state for rendering something inside the component and some state for rendering something outside the component and we must write the state that we need outside the component in the parent component to have access to the outside of the component data's


# in line 65 to 76 of MovieDetails component:


  useEffect(

    function () {
      if (!title) return;
      document.title = `Movie ${title}`;
      return function () {
        document.title = "usePopcorn";
        console.log(`Clean up effect for movie ${title}`);
      };
    },
    [title]
  );

the function that we will return inside of the useEffect will remember the title and that's because of something called "Closure" in javaScript

# Closure:  
- means that a function will always remember all the variables that were present at the time and the place that the function was created (by simple saying).