import { idText } from "typescript";

const tbody = document.querySelector('tbody') as HTMLTableSectionElement;
const numOfMovies = document.querySelector('.moviesNumber') as HTMLParagraphElement;
const searchMovies = document.querySelector('#searchMovies') as HTMLInputElement;
const paginationSpan = document.querySelector('.paginationSpan')

export async function drawMoviesTable() {
    /* ========== Fetch Movies Api */
    const res = await fetch("http://localhost:4000/api/movies")
    const movies = await res.json();

    /* ========== Draw Main Table ========== */
    for (let i = 0; i < movies.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML += `
            <th scope="row"><a href="${movies[i]._id}">${movies[i].title}</a></th>
            <td>${movies[i].genre.name}</td>
            <td>${movies[i].numberInStock}</td>
            <td>${movies[i].dailyRentalRate}</td>
            <td>
                <img class="heartIconImg" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png?ga=GA1.1.1565964862.1695638648" alt="" />
            </td>
        `;
        numOfMovies.innerText = `Showing ${movies.length} movies in the database.`
        tbody.append(row);

        // const fourMovies = [movies[i], movies[i+1], movies[i+2], movies[i+3]]
        // console.log(fourMovies);
    }

    /* ========== Draw Genres Table ========== */
    const singleGenre = document.querySelectorAll('.singleGenre') as NodeListOf<HTMLDivElement>;

    for (let i = 0; i < singleGenre.length; i++) {
        singleGenre[i].onclick = (e) => {
            tbody.innerHTML = '';
            const btn = e.target as HTMLButtonElement;

            singleGenre.forEach(btn => btn.classList.remove('genreActive'))
            btn.classList.add('genreActive')

            if (singleGenre[i].classList.contains('allGenres')) {
                for (let i = 0; i < movies.length; i++) {
                    const row = document.createElement('tr');
                    row.innerHTML += `
                        <th scope="row"><a href="${movies[i]._id}">${movies[i].title}</a></th>
                        <td>${movies[i].genre.name}</td>
                        <td>${movies[i].numberInStock}</td>
                        <td>${movies[i].dailyRentalRate}</td>
                        <td>
                            <img class="heartIconImg" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png?ga=GA1.1.1565964862.1695638648" alt="" />
                        </td>
                    `;
                    numOfMovies.innerText = `Showing ${movies.length} movies in the database.`
                    tbody.append(row);
                }
            }

            if (singleGenre[i].classList.contains('Action')) {
                for (let i = 0; i < movies.length; i++) {
                    if (movies[i].genre.name === 'Action') {
                        numOfMovies.innerText = `Showing ${movies.length} movies in the database.`
                        const row = document.createElement('tr');
                        row.innerHTML += `
                        <th scope="row"><a href="${movies[i]._id}">${movies[i].title}</a></th>
                        <td>${movies[i].genre.name}</td>
                        <td>${movies[i].numberInStock}</td>
                        <td>${movies[i].dailyRentalRate}</td>
                        <td>
                            <img class="heartIconImg" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png?ga=GA1.1.1565964862.1695638648" alt="" />
                        </td>
                        `;
                        tbody.append(row);
                    }
                }
            }

            if (singleGenre[i].classList.contains('Comedy')) {
                for (let i = 0; i < movies.length; i++) {
                    if (movies[i].genre.name === 'Comedy') {
                        const row = document.createElement('tr');
                        row.innerHTML += `
                        <th scope="row"><a href="${movies[i]._id}">${movies[i].title}</a></th>
                        <td>${movies[i].genre.name}</td>
                        <td>${movies[i].numberInStock}</td>
                        <td>${movies[i].dailyRentalRate}</td>
                        <td>
                            <img class="heartIconImg" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png?ga=GA1.1.1565964862.1695638648" alt="" />
                        </td>
                    `;
                        numOfMovies.innerText = `Showing ${movies.length} movies in the database.`
                        tbody.append(row);
                    }
                }
            }

            if (singleGenre[i].classList.contains('Horror')) {
                for (let i = 0; i < movies.length; i++) {
                    if (movies[i].genre.name === 'Horror') {
                        const row = document.createElement('tr');
                        row.innerHTML += `
                        <th scope="row"><a href="${movies[i]._id}">${movies[i].title}</a></th>
                        <td>${movies[i].genre.name}</td>
                        <td>${movies[i].numberInStock}</td>
                        <td>${movies[i].dailyRentalRate}</td>
                        <td>
                            <img class="heartIconImg" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png?ga=GA1.1.1565964862.1695638648" alt="" />
                        </td>
                    `;
                        numOfMovies.innerText = `Showing ${movies.length} movies in the database.`
                        tbody.append(row);
                    }
                }
            }

            if (singleGenre[i].classList.contains('Romance')) {
                for (let i = 0; i < movies.length; i++) {
                    if (movies[i].genre.name === 'Romance') {
                        const row = document.createElement('tr');
                        row.innerHTML += `
                        <th scope="row"><a href="${movies[i]._id}">${movies[i].title}</a></th>
                        <td>${movies[i].genre.name}</td>
                        <td>${movies[i].numberInStock}</td>
                        <td>${movies[i].dailyRentalRate}</td>
                        <td>
                            <img class="heartIconImg" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png?ga=GA1.1.1565964862.1695638648" alt="" />
                        </td>
                    `;
                        numOfMovies.innerText = `Showing ${movies.length} movies in the database.`
                        tbody.append(row);
                    }
                }
            }

            if (singleGenre[i].classList.contains('Thriller')) {
                for (let i = 0; i < movies.length; i++) {
                    if (movies[i].genre.name === 'Thriller') {
                        const row = document.createElement('tr');
                        row.innerHTML += `
                        <th scope="row"><a href="${movies[i]._id}">${movies[i].title}</a></th>
                        <td>${movies[i].genre.name}</td>
                        <td>${movies[i].numberInStock}</td>
                        <td>${movies[i].dailyRentalRate}</td>
                        <td>
                            <img class="heartIconImg" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png?ga=GA1.1.1565964862.1695638648" alt="" />
                        </td>
                    `;
                        numOfMovies.innerText = `Showing ${movies.length} movies in the database.`
                        tbody.append(row);
                    }
                }
            }

            if (singleGenre[i].classList.contains('PDP Genre')) {
                for (let i = 0; i < movies.length; i++) {
                    if (movies[i].genre.name === 'PDP Genre') {
                        const row = document.createElement('tr');
                        row.innerHTML += `
                        <th scope="row"><a href="${movies[i]._id}">${movies[i].title}</a></th>
                        <td>${movies[i].genre.name}</td>
                        <td>${movies[i].numberInStock}</td>
                        <td>${movies[i].dailyRentalRate}</td>
                        <td>
                            <img class="heartIconImg" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png?ga=GA1.1.1565964862.1695638648" alt="" />
                        </td>
                    `;
                        numOfMovies.innerText = `Showing ${movies.length} movies in the database.`
                        tbody.append(row);
                    }
                }
            }
        }
    }

    /* ========== Fill Heart Icon ========== */
    const heartIcon = document.querySelectorAll('.heartIconImg') as NodeListOf<HTMLImageElement>;

    for (let i = 0; i < heartIcon.length; i++) {
        heartIcon[i].onclick = () => {
            heartIcon[i].src = 'https://cdn-icons-png.flaticon.com/512/1077/1077086.png?ga=GA1.1.1565964862.1695638648'
        }
        heartIcon[i].onclick = () => {
            if (heartIcon[i].src === 'https://cdn-icons-png.flaticon.com/512/1077/1077086.png?ga=GA1.1.1565964862.1695638648') {
                heartIcon[i].src = "https://cdn-icons-png.flaticon.com/512/1077/1077035.png?ga=GA1.1.1565964862.1695638648"
            } else {
                heartIcon[i].src = 'https://cdn-icons-png.flaticon.com/512/1077/1077086.png?ga=GA1.1.1565964862.1695638648'
            }
        }
    }

    /* ========== SEARCH ========== */
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
}