import { get, values } from 'lodash';
import { Movie, Genre, Auth } from '../services';
import { drawGenreList } from "./index"

const tbody = document.querySelector('#tableBody') as HTMLTableSectionElement;
const numOfMovies = document.querySelector('.moviesNumber') as HTMLParagraphElement;
const allGenre = document.querySelector('.allGenre') as HTMLDivElement;
const searchMovies = document.querySelector('#searchMovies') as HTMLInputElement;

export function drawTableList() {
    try {
        (async () => {
            try {
                let res = await Movie.List();
                const singleGenre = document.querySelectorAll('.singleGenre') as NodeListOf<HTMLDivElement>

                for (let j = 0; j < res.length; j++) {
                    tbody.innerHTML += `
                    <tr>
                    <th scope="row"><a href="${res[j].id}">${res[j].title}</a></th>
                    <td>${res[j].genre.name}</td>
                    <td>${res[j].stock}</td>
                    <td>${res[j].rate}</td>
                    <td>
                        <img class="heartIconImg"
                            src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png?ga=GA1.1.1565964862.1695638648"
                            alt="" />
                    </td>
                    </tr>
                    `;
                    numOfMovies.innerText = `Showing ${res.length} in the database.`
                }

                for (let i = 0; i < singleGenre.length; i++) {
                    singleGenre[i].onclick = (e) => {
                        e.preventDefault();
                        tbody.innerHTML = '';
                        const btn = e.target as HTMLButtonElement;

                        singleGenre.forEach(btn => btn.classList.remove('genreActive'))
                        btn.classList.add('genreActive')

                        if (singleGenre[i].classList.contains('allGenre')) {
                            for (let i = 0; i < res.length; i++) {
                                numOfMovies.innerText = `Showing ${res.length} in the database.`
                                const row = document.createElement('tr');
                                row.innerHTML += `
                                    <th scope="row"><a href="${res[i].id}">${res[i].title}</a></th>
                                    <td>${res[i].genre.name}</td>
                                    <td>${res[i].stock}</td>
                                    <td>${res[i].rate}</td>
                                    <td>
                                        <img class="heartIconImg" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png?ga=GA1.1.1565964862.1695638648" alt="" />
                                    </td>
                                    `;
                                tbody.append(row);
                            }
                        } if (singleGenre[i].classList.contains('Action')) {
                            for (let i = 0; i < res.length; i++) {
                                if (res[i].genre.name === 'Action') {
                                    numOfMovies.innerText = `Showing ${res.length} in the database.`
                                    const row = document.createElement('tr');
                                    row.innerHTML += `
                                    <th scope="row"><a href="${res[i].id}">${res[i].title}</a></th>
                                    <td>${res[i].genre.name}</td>
                                    <td>${res[i].stock}</td>
                                    <td>${res[i].rate}</td>
                                    <td>
                                        <img class="heartIconImg" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png?ga=GA1.1.1565964862.1695638648" alt="" />
                                    </td>
                                    `;
                                    tbody.append(row);
                                }
                            }
                        }
                        if (singleGenre[i].classList.contains('Comedy')) {
                            for (let i = 0; i < res.length; i++) {
                                if (res[i].genre.name === 'Comedy') {
                                    numOfMovies.innerText = `Showing ${res.length} in the database.`
                                    const row = document.createElement('tr');
                                    row.innerHTML += `
                                    <th scope="row"><a href="${res[i].id}">${res[i].title}</a></th>
                                    <td>${res[i].genre.name}</td>
                                    <td>${res[i].stock}</td>
                                    <td>${res[i].rate}</td>
                                    <td>
                                        <img class="heartIconImg" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png?ga=GA1.1.1565964862.1695638648" alt="" />
                                    </td>
                                    `;
                                    tbody.append(row);
                                }
                            }
                        } if (singleGenre[i].classList.contains('Horror')) {
                            for (let i = 0; i < res.length; i++) {
                                if (res[i].genre.name === 'Horror') {
                                    numOfMovies.innerText = `Showing ${res.length} in the database.`
                                    const row = document.createElement('tr');
                                    row.innerHTML += `
                                    <th scope="row"><a href="${res[i].id}">${res[i].title}</a></th>
                                    <td>${res[i].genre.name}</td>
                                    <td>${res[i].stock}</td>
                                    <td>${res[i].rate}</td>
                                    <td>
                                        <img class="heartIconImg" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png?ga=GA1.1.1565964862.1695638648" alt="" />
                                    </td>
                                    `;
                                    tbody.append(row);
                                }
                            }
                        } if (singleGenre[i].classList.contains('PDP Genre')) {
                            for (let i = 0; i < res.length; i++) {
                                if (res[i].genre.name === 'PDP Genre') {
                                    numOfMovies.innerText = `Showing ${res.length} in the database.`
                                    const row = document.createElement('tr');
                                    row.innerHTML += `
                                    <th scope="row"><a href="${res[i].id}">${res[i].title}</a></th>
                                    <td>${res[i].genre.name}</td>
                                    <td>${res[i].stock}</td>
                                    <td>${res[i].rate}</td>
                                    <td>
                                        <img class="heartIconImg" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png?ga=GA1.1.1565964862.1695638648" alt="" />
                                    </td>
                                    `;
                                    tbody.append(row);
                                }
                            }
                        } if (singleGenre[i].classList.contains('Romance')) {
                            for (let i = 0; i < res.length; i++) {
                                if (res[i].genre.name === 'Romance') {
                                    numOfMovies.innerText = `Showing ${res.length} in the database.`
                                    const row = document.createElement('tr');
                                    row.innerHTML += `
                                    <th scope="row"><a href="${res[i].id}">${res[i].title}</a></th>
                                    <td>${res[i].genre.name}</td>
                                    <td>${res[i].stock}</td>
                                    <td>${res[i].rate}</td>
                                    <td>
                                        <img class="heartIconImg" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png?ga=GA1.1.1565964862.1695638648" alt="" />
                                    </td>
                                    `;
                                    tbody.append(row);
                                }
                            }
                        } if (singleGenre[i].classList.contains('Thriller')) {
                            for (let i = 0; i < res.length; i++) {
                                if (res[i].genre.name === 'Thriller') {
                                    numOfMovies.innerText = `Showing ${res.length} in the database.`
                                    const row = document.createElement('tr');
                                    row.innerHTML += `
                                    <th scope="row"><a href="${res[i].id}">${res[i].title}</a></th>
                                    <td>${res[i].genre.name}</td>
                                    <td>${res[i].stock}</td>
                                    <td>${res[i].rate}</td>
                                    <td>
                                        <img class="heartIconImg" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png?ga=GA1.1.1565964862.1695638648" alt="" />
                                    </td>
                                    `;
                                    tbody.append(row);
                                }
                            }
                        }
                    }
                }

                /* ========== Search Function ==========*/

                function doSearch(searchValue: string) {
                    Array.from(tbody.children).forEach((rowElement: HTMLTableRowElement, index: number) => {
                        if (!rowElement.textContent.toLowerCase().includes(searchValue.toLowerCase())) {
                            rowElement.style.display = 'none';
                        } else {
                            rowElement.style.display = 'table-row';
                        }
                    });
                }
                searchMovies.addEventListener('keyup', () => doSearch(searchMovies.value));
            } catch (error) {
                console.log(error);
            }
        })();
    } catch (error) {
        console.log(error);
    }
}