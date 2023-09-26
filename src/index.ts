import "./main.css"
// import { faker } from '@faker-js/faker';
// import { Movie, Genre, Auth } from './services';
// const btn = document.querySelector('button');


const body = document.querySelector('body') as HTMLBodyElement;
const inputUserName = document.querySelector('#inputUserName') as HTMLInputElement;
const inputEmail = document.querySelector('#inputEmail') as HTMLInputElement;
const inputPassword = document.querySelector('#inputPassword') as HTMLInputElement;
const submitBtn = document.querySelector('#btnSubmit') as HTMLButtonElement;

const registerPage = document.createElement('main');
registerPage.innerHTML = `
<div class="mb-3">
<label for="formGroupExampleInput" class="form-label">User Name</label>
  <input type="text" class="form-control" id="inputUserName" required>
</div>
<div class="mb-3">
<label for="formGroupExampleInput2" class="form-label">Email</label>
<input type="email" class="form-control" id="inputEmail" required>
</div>
<div class="mb-3">
<label for="formGroupExampleInput2" class="form-label">Password</label>
<input type="password" class="form-control" id="inputPassword" required>
</div>
<div class="col-12">
<button type="submit" class="btn btn-primary" id="btnSubmit">Sign in</button>
</div>`;

body.appendChild(registerPage)
console.log(submitBtn);

submitBtn.onclick = () => {
  console.log(inputUserName, inputEmail, inputEmail);
}

// async function init() {
//   const fake = {
//     email: ,
//     password: ,
//     name: 
//   };

//   const newUser = await Auth.Register(fake);
//   console.log('newUser = ', newUser);

//   const token = await Auth.Login({ email: fake.email, password: fake.password });
//   console.log('token = ', token);

//   const user = await Auth.Me(token);
//   console.log('user = ', user);
// }

// btn.addEventListener('click', () => {
//   init();
// });