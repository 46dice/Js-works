'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },

    questionForUser: function () {
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
    },

    detectedUserLvl: function () {
        if (personalMovieDB.count < 10) {
            console.log('Мало фильмов, бро');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Классическое количество просмотров фильмов, бро');
        } else if (personalMovieDB.count >= 30) {
            console.log('Прям дохуя фильмов посмотрел, бро, красавчик!');
        } else {
            console.log('Произошла ошибка, бро');
        }
    },

    showMyDB: function (privat) {
        if (!privat) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        (personalMovieDB.privat) ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            const genres = prompt(`Ваш любимый жанр по номером ${i}`, '');
            if (genres == null || genres === '') {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },

};

personalMovieDB.writeYourGenres()

