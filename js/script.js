'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '').trim();
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    ememberMyFilms: function() {
            for(let i = 0; i < 2; i++){
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(), //trim уьерает пробельный символ
                b = +prompt('На сколько оцените его?', '');

            if(a != null && b != null && a != '' && b != '' && a.length < 50 && b < +11){
                personalMovieDB.movies[a] = b;
                console.log('done');
            }else {
                console.log('error');
                i--;
            }         
        }
    },
    detectPersonalLevel: function() {
            if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        }else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        }else {
            alert('ERROR');
        }
    },
    showMyDB: function(hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i < 2; i++){
            //const genre = prompt(`Ваш любимый жанр под номером ${i}`).trim();
            //if(genre == null || genre === ''){
                //console.log('Вы ввели некоректные данные!');
                //i--;
            //}else {
                //personalMovieDB.genres[i - 1] = genre;
            //} 

            //Альтернативный вариант
            const genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            if(genres == null || genres === ''){
                console.log('Вы ввели некоректные данные!');
                i--;
            }else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            } 
        }
        personalMovieDB.genres.forEach((item, i) => {
            alert(`Любимый жанр ${i + 1} - это ${item}`);
        });
    } 
};
/*
personalMovieDB.start();
personalMovieDB.ememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
*/