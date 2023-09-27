import "./main.css"
import { faker } from '@faker-js/faker';
import { Movie, Genre, Auth } from './services';
import { registerUser, submitBtnReg, login, submitBtnLog, drawGenreList, genrelistDom, drawTableList } from './pages'
const loginPageDom = document.querySelector('.loginPage') as HTMLElement;
const registerPageDom = document.querySelector('.registerPage') as HTMLElement;
const mainPageDom = document.querySelector('.mainPage') as HTMLElement;

const homeNavBarBtn = document.querySelector('.HomeNavBar') as HTMLDivElement;
const loginNavBarBtn = document.querySelector('.LoginNavBar') as HTMLDivElement;
const registerNavBarBtn = document.querySelector('.RegisterNavBar') as HTMLDivElement;

const token = localStorage.getItem("userToken");

function Me() {
    try {
        const fetch = async () => {
            const user = await Auth.Me(token);
            console.log('user = ', user);
            loginNavBarBtn.innerText = user.name
            registerNavBarBtn.innerText = "Log Out"
        }
        fetch()
    } catch (error: any) {
        console.log(error);
    }
}

loginNavBarBtn.onclick = () => {
    if (token) return;
    registerPageDom.style.display = "none";
    mainPageDom.style.display = "none";
    loginPageDom.style.display = "block"
}

registerNavBarBtn.onclick = () => {
    if (token) {
        localStorage.clear()
        window.location.href = "/"
    }
    else {
        mainPageDom.style.display = "none"
        loginPageDom.style.display = "none"
        registerPageDom.style.display = "block";
    }
}

homeNavBarBtn.onclick = () => {
    loginPageDom.style.display = "none"
    registerPageDom.style.display = "none";
    mainPageDom.style.display = "flex"
}

submitBtnReg.addEventListener('submit', (e) => {
    e.preventDefault()
    registerUser();
});

submitBtnLog.addEventListener('submit', (e) => {
    e.preventDefault()
    login();
});

function init() {
    Me();
    drawGenreList();
    drawTableList();
}

init();