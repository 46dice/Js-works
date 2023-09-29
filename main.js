'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function questionForUser() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из просмотренных фильмов?', ''),
            b = prompt('На сколько вы оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('WELL DONE');
        } else {
            console.log('error');
            i--;
        }
    }
}

questionForUser();


function detectedUserLvl() {
    if (personalMovieDB.count < 10) {
        console.log('Мало фильмов, бро');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Классическое количество просмотров фильмов, бро');
    } else if (personalMovieDB.count >= 30) {
        console.log('Прям дохуя фильмов посмотрел, бро, красавчик!');
    } else {
        console.log('Произошла ошибка, бро');
    }
}

detectedUserLvl();


function showMyDB(privat) {
    if (!privat) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat)

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt (`Ваш любимый жанр по номером ${i}`, '');
        personalMovieDB.genres.push(genre);
    }
    console.log(personalMovieDB.genres);
}

writeYourGenres();