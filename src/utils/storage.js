import AsyncStorage from '@react-native-async-storage/async-storage';

//BUSCAR OS FILMES SALVOS
export async function getMoviesSave(key) {
  const myMovies = await AsyncStorage.getItem(key)

  let moviesSave = JSON.parse(myMovies) || [];
  return moviesSave;

}

//SALVAR UM NOVO FILME
export async function saveMovie(key, newMovie) {

  let moviesStored = await getMoviesSave(key);

  //SE TIVER ALGUM FILME SALVO COM ESSE MESMO ID / OU DUPLICADO PRECISAMOS IGNORAR
  const hasMovie = moviesStored.some(item => item.id === newMovie.id)

  if (hasMovie) {
    console.log('Esse filme já existe na sua lista');
    return;
  }

  moviesStored.push(newMovie)

  await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
  console.log('Filme salvo com sucesso!')

}

//DELETAR ALGUM FILME ESPECIFICO
export async function deleteMovie(id) {

  let movieStored = await getMoviesSave('@primereact');

  let myMovies = movieStored.filter(item => {
    return (item.id !== id)
  })

  await AsyncStorage.setItem('@primereact', JSON.stringify(myMovies));
  console.log('FILME DELETADO COM SUCESSO!')
  return myMovies;

}

//FILTRAR ALGUM FILME SE JÁ ESTA SALVO
export async function hasMovie(movie) {
  let moviesStored = await getMoviesSave('@primereact');

  const hasMovie = moviesStored.find(item => item.id === movie.id)

  if (hasMovie) {
    return true;
  }

  return false;
}