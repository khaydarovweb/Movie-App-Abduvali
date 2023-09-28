import { User } from '../mappers';
import { Movie, Genre, Auth } from '../services';
import { genreSelect } from './genreList';

const movieTitle = document.querySelector('#movieTitle') as HTMLInputElement;
const movieGenreType = document.querySelector('#genreSelect') as HTMLSelectElement;
const movieStockNum = document.querySelector('#movieStockNum') as HTMLInputElement;
const movieRateNum = document.querySelector('#movieRateNum') as HTMLInputElement;
const addMovieBtn = document.querySelector('#createMovie') as HTMLFormElement;

export async function createMovieFn() {
    const newMovie = {
        title: movieTitle.value,
        stock: +movieStockNum.value,
        rate: +movieRateNum.value,
        genreId: genreSelect.value,
    };
    try {
        console.log(newMovie);
        const movie = await Movie.Create(newMovie);
        console.log('newMovie = ', movie);
        alert('Movie Created Successfully 👍')
    } catch (error: any) {
        console.log(error);
        console.log(newMovie);
        alert('Something Went Wrong On Creating Movie ❌')
    }
}

addMovieBtn.onsubmit = (e) => {
    e.preventDefault()
    createMovieFn();
}