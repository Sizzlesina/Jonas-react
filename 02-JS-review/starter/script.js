/** @format */

// Destructuring arrays and objects


const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// // Destructuring

// const book = getBook(2);
// // const title = book.title;
// // const author = book.author;

// const {title,author,pages,publicationDate,genres,hasMovieAdaptation} = book;

// // if we destruct the object like this it wont work:
// // const {titles,authors} = book;
// // i mean the name of the destructive variable must be the same as the key property

// console.log(author,title,genres);

// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[1];
// // console.log(primaryGenre,secondaryGenre);
// // we want to destruct an array and we dont want to destruct it like the code above

// const [primaryGenre,secondayGenre] = genres;
// console.log(primaryGenre,secondayGenre);
// // results are the same

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // RestSpread operator

// const book = getBook(1);

// const {title,author,genres} = book;
// // Rest operator [...something] the three dot is getting used for the rest operator:

// const [primaryGenre,...otherGenres] = genres;
// console.log(title,author,genres);
// console.log(primaryGenre,otherGenres);

// const newGenres1 = [genres,"epic fantasy"];
// newGenres1;
// // as we can see we want to add a new genre to the array but we want to be inside the object in the array and not like the code above

// // Spread operator:
// const newGenres2 = [...genres,"epic fantasy"];
// newGenres2;

// const updatedBook1 = {book,moviePublicationDate : "2001-12-19"};
// updatedBook1;
// const updatedBook2 = {
//   ...book,
//   // Adding a new property
//   moviePublicationDate: "2001-12-19",

//   // Overwriting an existing property
//   pages : 1210
// }
// updatedBook2;

// // the overwriting and adding new property to the object is as same as the arrays

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Template literals >>

// const book = getBook(1);

// const { title, author, genres,pages,publicationDate} = book;

// // Rest operator:
// const [primaryGenre, ...otherGenres] = genres;
// console.log(title, author, genres);
// console.log(primaryGenre, otherGenres);

// const newGenres1 = [genres, "epic fantasy"];
// newGenres1;

// // Spread operator:
// const newGenres2 = [...genres, "epic fantasy"];
// newGenres2;

// const updatedBook1 = { book, moviePublicationDate: "2001-12-19" };
// updatedBook1;
// const updatedBook2 = {
//   ...book,
//   // Adding a new property
//   moviePublicationDate: "2001-12-19",

//   // Overwriting an existing property
//   pages: 1210,
// };
// updatedBook2;

// // Template literals:
// const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${publicationDate.split('-')[0]} `;
// summary;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Ternaries instead of if-else statement >>

// const book = getBook(2);
// const {title,author,publicationDate,pages,hasMovieAdaptation } = book;

// // Template literals:
// const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${publicationDate.split("-")[0]}. The book has ${hasMovieAdaptation ? '' : "not"} been adapted as a movie`;
// summary;
// // Ternary:
// const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
// pagesRange;
// console.log(`The book has ${pagesRange} pages`);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Arrow functions

// const book = getBook(2);

// const {title,author,pages,genres,hasMovieAdaptation,publicationDate} = book;

// // Arrow function:

// // function getYear(str){
// //   return str.split('-')[0];
// // }
// // now the same function but this time its arrow function:
// const getYear = (str) => str.split('-')[0]; // when we only have one line in the arrow function we dont need to use the "return" keyword

// console.log(getYear(publicationDate));
// // Template literals:
// const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(publicationDate)}`;
// summary;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Short-circuiting and logical operators >>

// const book = getBook(2);

// // Destructing:
// const {title,author,pages,genres,hasMovieAdaptation,publicationDate} = book;

// // The "&&" or "and" operator:

// // HINT: when the first value is false it will immediately return the first value and if the first value is true it will return the second value

// console.log(true && "Some string");
// console.log(false && "Some string");
// console.log(hasMovieAdaptation && "This book has a movie");
// // falsy : 0 , '', null, undefined
// console.log('jonas' && "Some string"); // since this is true we get the second value
// console.log(0 && 'jonas');  // because the first value is a falsy value we get the first value

// // The "||" or "OR" operator

// // HINT: when the first value is true it will return the first value (Short cicuits) and if the first value is false then it will return the second value

// console.log(true || "Some string");
// console.log(false || "Some string");
// console.log(book.translations.spanish);

// const spanishTranslations = book.translations.spanish || "NOT TRANSLATED";
// spanishTranslations;

// // Nullish coalescing operator

// // HINT: in here the reviewCount is a falsy value and when we use the OR operator we will return the second value when the first one is falsy but in here we want to return the first value

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Optional chaining >>

// const book = getBook(3);

// // Destructing
// const {title,author,pages,genres,publicationData,hasMovieAdaptation} = book;

// function getTotalReviewCount(book){
//   const goodreads = book.reviews?.goodreads?.reviewsCount;
//   const librarything = book.reviews?.librarything?.reviewsCount ?? 0;// HINT: in this line of code we actully say: if "book.reviews.librarything" exists then return the "reviewsCount" and if not set the default "0" value for it

//   return goodreads + librarything;
// }
// console.log(getTotalReviewCount(book));

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Array map method >>

// const books = getBooks();
// books;

// const x = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(x);

// const titles = books.map((book) => book.title);
// titles;

// // (We need an array of titles and authors)

// // 1.
// // const essentialData = books.map((book) => {
// //   return {
// //     title: book.title,
// //     author: book.author,
// //   };
// // });
// // essentialData;

// // 2.
// function getTotalReviewCount(book){
//   const goodreads = book.reviews?.goodreads?.reviewsCount;
//   const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
//   librarything;

//   return goodreads + librarything;
// }
// const essentialData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
//   reviewsCount : getTotalReviewCount(book)
// }));
// essentialData;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Array filter method >>

// const books = getBooks();

// const longBooks = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.hasMovieAdaptation);
// longBooks;

// const adventureBooks = books.filter(books => books.genres.includes("adventure")).map(book => book.title);
// adventureBooks;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Array reduce method >>

// const books = getBooks();

// // HINT: The reduce method is the one method that rules all the other methods

// const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
// pagesAllBooks;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Array sort method >>

// const books = getBooks();

// const arr = [3, 7, 1, 9, 6];

// // // Sort the array in a ascending order
// // const sorted1 = arr.sort((a, b) => a - b);
// // sorted1;
// // arr;

// // // Sort the array in a descending order
// // const sorted2 = arr.sort((a,b) => b - a);
// // sorted2;
// // arr;
// // WARNING: This way of sorting the array will change the original array so beware of that!

// // Now in the next line of codes we will take a copy of the original array then sort it:
// const sorted = arr.slice().sort((a, b) => a - b);
// sorted;
// arr;

// // Sort the books based on their pages on a ascending order
// const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages).map(book => book.title);
// sortedByPages;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Working with immutable arrays >>

// const books = getBooks();

// // 1. Add book object to array
// const newBook = {
//   id: 6,
//   title: "Harry Potter and the Chamber of Secrets",
//   author: "J. K. Rowling",
// };
// const booksAfterAdd = [...books, newBook];
// booksAfterAdd;

// // 2. Delete book object from array
// const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// booksAfterDelete;

// // 3. Update book object in the array
// const booksAfterUpdate = booksAfterDelete.map((book) =>
//   book.id === 1 ? {...book,pages: 1} : book
// );
// booksAfterUpdate;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Asynchronous javascript promises >>

// const books = getBooks();

// const res = fetch(`https://jsonplaceholder.typicode.com/todos`)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // << Asynchronous javascript async await >>

// async function getTodos(){
//   const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//   const data = await response.json();
//   console.log(data);

//   return data;
// }
// const todos = getTodos();
// console.log(todos);


// // FINISHED THR REVIEW OF THE JAVASCRIPT.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
