import { Movie, Genre, Auth } from '../services';

export let genrelistDom = document.querySelector(".genreList") as HTMLDivElement;
export let genreSelect = document.querySelector("#genreSelect") as HTMLSelectElement;

export function drawGenreList() {
    try {
        const fetch = async () =>{
    
            let res =  await Genre.List()
            for (let i = 0; i < res.length; i++) {
                genrelistDom.innerHTML += `<div class="singleGenre ${res[i].name}">${res[i].name}</div>`
                genreSelect.innerHTML += `<option value="${res[i].id}">${res[i].name}</option>`
            }
        }
        fetch()
        
    } catch (error:any) {
        console.log(error);
    }
}