'use strict';

const byRating = document.querySelector('.byRating');
const allFilms = document.querySelector('.allMovies');

const movies = [];

for (let i = 0; i < 3; i++) {
  const title = prompt('Enter movie title');
  const rating = prompt('Enter movie rating');

  movies.push({title: title, rating: +rating});
}

const allMovies = [...movies];

allMovies.sort(function (a, b) {
  return b.rating - a.rating;
});

byRating.innerHTML = `Best movie by Rating is ${allMovies[0].title}`;

for (const movie of allMovies) {
  allFilms.innerHTML += `<li> ${movie.title}, ${movie.rating} </li>`;
}
