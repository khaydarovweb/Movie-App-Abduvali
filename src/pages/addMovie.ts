import { Movie, Genre, Auth } from '../services';

const movieTitle = document.querySelector('.movieTitle') as HTMLInputElement;
const movieGenreType = document.querySelector('.movieGenreType') as HTMLInputElement;
const movieStockNum = document.querySelector('.movieStockNum') as HTMLInputElement;
const movieRateNum = document.querySelector('.movieRateNum') as HTMLInputElement;

export async function createMovieFn() {
    const newMovie = {
        title: movieTitle.value,
        stock: 'lesson',
        rate: 10,
        genreId: '100',
    };

    try {
        const movie = await Movie.Create(newMovie);
        console.log('newMovie = ', movie);
    } catch (error: any) {
        console.log(error);
    }
}