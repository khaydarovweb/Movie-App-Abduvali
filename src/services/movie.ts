import { isToken } from 'typescript';
import * as Mappers from '../mappers';
import { IForm } from '../types';

const baseURL = 'http://localhost:4000/api';
const TOKEN = localStorage.getItem("userToken")
console.log(TOKEN);

export async function List() {
  const res = await fetch(`${baseURL}/movies`);
  const data = (await res.json()) as any[];
  const movies = data.map(Mappers.Movie);

  return movies;
}

export async function Single(movieId: string) {
  const res = await fetch(`${baseURL}/movies/${movieId}`);
  const data = await res.json();
  const movie = Mappers.Movie(data);

  return movie;
}

export async function Create({ title, stock, rate, genreId }: IForm.Movie.Create) {
  const body = JSON.stringify({
    title,
    numberInStock: stock,
    dailyRentalRate: rate,
    genreId
  });

  const res = await fetch(`${baseURL}/movies`, {
    method: 'POST',
    body,
    headers: { 'Content-Type': 'application/json', 'x-auth-token': TOKEN }
  });

  const data = await res.json();
  const movie = Mappers.Movie(data);

  return movie;
}