import { get } from 'lodash';
import { Movie, Genre, Auth } from '../services';

const tbody = document.querySelector('#tableBody') as HTMLTableSectionElement;
const numOfMovies = document.querySelector('.moviesNumber') as HTMLParagraphElement;

export function drawTableList() {
    try {
        (async () => {
            try {
                let res = await Movie.List(); // Assuming Movie.List() is an async function that fetches movie data
    
                for (let i = 0; i < res.length; i++) {
                    tbody.innerHTML += `
                    <tr>
                    <th scope="row"><a href="${res[i].id}">${res[i].title}</a></th>
                    <td>${res[i].genre.name}</td>
                    <td>${res[i].stock}</td>
                    <td>${res[i].rate}</td>
                    <td>
                        <img class="heartIconImg"
                            src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png?ga=GA1.1.1565964862.1695638648"
                            alt="" />
                    </td>
                    </tr>
                    `;
                }
                
                numOfMovies.innerText = `Showing ${res.length} movies in the database.`;
            } catch (error) {
                console.log(error);
            }
        })();
    } catch (error) {
        console.log(error);
    }
}