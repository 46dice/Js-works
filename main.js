'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

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

if (personalMovieDB.count < 10) {
    alert('Мало фильмов, бро');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert('Классическое количество просмотров фильмов, бро');
} else if (personalMovieDB.count > 30) {
    alert('Прям дохуя фильмов посмотрел, бро, красавчик!');
} else {
    alert('Произошла ошибка')
}


console.log(personalMovieDB);
