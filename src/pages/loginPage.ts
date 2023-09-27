import { Movie, Genre, Auth } from '../services';

const emailInput = document.querySelector('#emailInput') as HTMLInputElement;
const pinInput = document.querySelector('#passwordInput') as HTMLInputElement;
export const submitBtnLog = document.querySelector('#submitBtn') as HTMLFormElement;

export async function login() {
    const fake = {
        email: emailInput.value,
        password: pinInput.value,
    };

    try {
        const token = await Auth.Login({ email: fake.email, password: fake.password });
        console.log('token = ', token);
        localStorage.setItem("userToken", token)
        window.location.reload()
        alert('You have Logged In 👍')
    } catch (error) {
        console.error(error);
        alert('Some Problem With Log In ');
    }
}