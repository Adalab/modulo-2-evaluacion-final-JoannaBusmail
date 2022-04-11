'use strict';
//CONSTANTES DE ELEMENTOS HTML

const form = document.querySelector('.js_form');
const input = document.querySelector('.js_input');
const searchBtn = document.querySelector('.js_searchBtn');
const resetBtn = document.querySelector('.js_resetBtn');
const ulFavoriteList = document.querySelector('.js_favorites');
const ulList = document.querySelector('.js_list');

// *****  VARIABLE DONDE GUARDO CADA ELEMENTO BUSCADO DE LA API*****
let searchList = [];
// ***** VARIABLE DONDE GUARDO CADA ELEMENTO DE FAVORITOS ****
let favoriteList = [];

function handleSubmit(event) {
  event.preventDefault();
}

//*******   LISTENER BOTON SEARCH ****

function handleSubmit(event) {
  event.preventDefault();
}

//*******   LISTENER BOTON SEARCH ****

form.addEventListener('click', handleSubmit);
