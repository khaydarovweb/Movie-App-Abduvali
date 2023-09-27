import { Movie, Genre, Auth } from '../services';

const userNameInput = document.querySelector('#inputUserName') as HTMLInputElement;
const emailInput = document.querySelector('#inputEmail') as HTMLInputElement;
const pinInput = document.querySelector('#inputPassword') as HTMLInputElement;
export const submitBtnReg = document.querySelector('#btnSubmit') as HTMLFormElement;
const loginPageDom = document.querySelector('.loginPage') as HTMLElement;
const registerPageDom = document.querySelector('.registerPage') as HTMLElement;

export async function registerUser() {
    const fake = {
        email: emailInput.value,
        password: pinInput.value,
        name: userNameInput.value,
    };

    try {
        const newUser = await Auth.Register(fake);
        console.log('newUser = ', newUser);
        registerPageDom.style.display = 'none';
        loginPageDom.style.display = 'block'
    } catch (error: any) {
        console.log(error);
    }
}