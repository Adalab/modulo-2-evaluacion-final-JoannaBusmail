'use strict';

//Guardo en Local Storage el array de favoritos convertido a string
function copyInLocalStorage(){
    const stringFavs = JSON.stringify(favoriteList);
    localStorage.setItem('favoriteList' , stringFavs);
  
  }
  
//saco de Local Storage el string de favoritos y lo convierto a array
  function getLocalStorageFavs(){
    const localStorageFavs = localStorage.getItem('favoriteList');
    const arrayFavs = JSON.parse(localStorageFavs);
   favoriteList = arrayFavs;
    renderFav();
  }
  
//Si está guardado en LS llamo a la funcion y esta función me dice a su vez que pinte el listado de favoritos
if (localStorage.getItem('favoriteList') !== null){
    getLocalStorageFavs();
//Si no esta guardado en LS llamo a la info de la API que a su vez ésta me dice que pinte el listado de favoritos
  }else{
    getInfoApi();
  }

  
  //Llamo a la info guardada en LS y que la pinte, cuando cargue la página

  getLocalStorageFavs();
