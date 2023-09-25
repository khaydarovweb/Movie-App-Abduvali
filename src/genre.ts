const genreList = document.querySelector('.genreList') as HTMLDivElement;


// It is a Function that fetch genre API and draws to DOM
export async function getGenreList() {
    const res = await fetch("http://localhost:4000/api/genres");
    const genre = await res.json();
    let genresArr: any = [];
    genresArr = genre;

    for (let i = 0; i < genre.length; i++) {
        genreList.innerHTML += `<div class="singleGenre ${genre[i].name}">${genre[i].name}</div>`;
    }

    
    const singleGenre = document.querySelectorAll('.singleGenre') as NodeListOf<HTMLDivElement>;
    
    singleGenre.forEach((singleGenre: any) => {
        singleGenre.onclick = () => {
            if (singleGenre.classList.contains('genreActive')) {
                singleGenre.classList.remove('genreActive');
            }
        };
    });
}