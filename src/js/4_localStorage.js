'use strict';

//Guardo en Local Storage el array de favoritos convertido a string
function copyInLocalStorage() {
  const stringFavs = JSON.stringify(favoriteList);
  localStorage.setItem('favoriteList', stringFavs);
}

//saco de Local Storage el string de favoritos y lo convierto a array
function getLocalStorageFavs() {
  const localStorageFavs = localStorage.getItem('favoriteList');
  const arrayFavs = JSON.parse(localStorageFavs);

  //Si está guardado en LS llamo a la funcion
  if (localStorageFavs !== null) {
    favoriteList = arrayFavs;
  }
  renderFav();
}
//Llamo a la info guardada en LS y que la pinte, cuando cargue la página

getLocalStorageFavs();
