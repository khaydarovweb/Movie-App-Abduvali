import "bootstrap/dist/css/bootstrap.min.css";
import './main.css';
import { getGenreList } from "./genre";
import { drawMoviesTable } from "./movietable"

function init() {
    setTimeout(() => {
        drawMoviesTable();
    }, 200);
    getGenreList();
}

init();