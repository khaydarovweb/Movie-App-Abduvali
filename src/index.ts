import "./main.css"
import { faker } from '@faker-js/faker';
import { Movie, Genre, Auth } from './services';
const btn = document.querySelector('button');

// const registerPage = document.createElement('main');
// registerPage.innerHTML = `
// <div class="mb-3">
// <label for="formGroupExampleInput" class="form-label">User Name</label>
//   <input type="text" class="form-control" id="inputUserName" required>
// </div>
// <div class="mb-3">
// <label for="formGroupExampleInput2" class="form-label">Email</label>
// <input type="email" class="form-control" id="inputEmail" required>
// </div>
// <div class="mb-3">
// <label for="formGroupExampleInput2" class="form-label">Password</label>
// <input type="password" class="form-control" id="inputPassword" required>
// </div>
// <div class="col-12">
// <button type="submit" class="btn btn-primary" id="btnSubmit">Sign in</button>
// </div>`;

async function init() {
  const fake = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    name: faker.person.firstName(), 
  };

  const newUser = await Auth.Register(fake);
  console.log('newUser = ', newUser);

  const token = await Auth.Login({ email: fake.email, password: fake.password });
  console.log('token = ', token);

  const user = await Auth.Me(token);
  console.log('user = ', user);
}

btn.addEventListener('click', () => {
  init();
});