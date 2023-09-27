import { Movie, Genre, Auth } from '../services';

export let genrelistDom = document.querySelector(".genreList")

export function drawGenreList() {
    try {
        const fetch = async () =>{
    
            let res =  await Genre.List()
            for (let i = 0; i < res.length; i++) {
                genrelistDom.innerHTML += `<div class="singleGenre allGenres">${res[i].name}</div>`
            }
        }
        fetch()
        
    } catch (error:any) {
        console.log(error);
    }
}