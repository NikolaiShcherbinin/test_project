/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const reklama = document.querySelectorAll('.promo__adv img'),
          movieList = document.querySelector('.promo__interactive-list'),
          formAdd = document.querySelector('.add'),
          inputAdd =  formAdd.querySelector('.adding__input'),
          checkboxAdd = formAdd.querySelector('[type="checkbox"]');



    formAdd.addEventListener("submit", (event)=>{
        event.preventDefault(); 

        let newFilm = inputAdd.value;
        const favorite = checkboxAdd.checked;

        if(newFilm){
            if(newFilm.length > 21){
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if(favorite){
                console.log('Добавлен любимый фильм');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMoviesList(movieDB.movies, movieList);
        }
        event.target.reset(); //очистка объекта события
    
    });


    const deliteAdv = (arr) =>{
        arr.forEach(item => {
            item.remove();
        });
    };



    const makeChanges = () => {
        document.querySelector('.promo__genre').textContent = 'драма';
        const bgBlock = document.querySelector('.promo__bg');
        bgBlock.style.backgroundImage = 'url("img/bg.jpg")';
    };
 

    const sortArr = (arr) =>{
        arr.sort();
    };  

  
    const createMoviesList = (films, parent) => {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', (e) => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMoviesList(films, parent);
            });
        });
    };

    deliteAdv(reklama);
    makeChanges();

    createMoviesList(movieDB.movies, movieList);

    
});