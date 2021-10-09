//GERAR UMA LISTA DE FILMES COM TAMANHO QUE EU DESEJAR.
export function getListMovies(size, movies) {
  let popularMovies = [];

  for (let i = 0, l = size; i < l; i++) {
    popularMovies.push(movies[i])
  }

  return popularMovies;
}

//GERAR UM NÚMERO ALEATORIO COM BASE NO TAMANHO DA LISTA DE FILMES QUE EU PASSAR
export function randomBanner(movies) {
  return Math.floor(Math.random() * movies.length)
}