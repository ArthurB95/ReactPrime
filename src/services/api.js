import axios from 'axios';

//URL FILMES EM CARTAZ;
//https://api.themoviedb.org/3/movie/now_playing?api_key=c4bb0ee8f4b9decc4343a8f596184b10&language=pt-BR&page=1

export const key = 'c4bb0ee8f4b9decc4343a8f596184b10';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'

})

export default api;