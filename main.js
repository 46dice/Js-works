'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
const lastFilmName = +prompt('Один из просмотренных фильмов?', ''),
    lastFilmRating = +prompt('На сколько вы оцените его?', '');

personalMovieDB.movies[lastFilmName] = lastFilmRating;

console.log(personalMovieDB);
