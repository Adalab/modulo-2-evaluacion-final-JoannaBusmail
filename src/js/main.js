'use strict';

//CONSTANTES DE ELEMENTOS HTML

const form = document.querySelector('.js_form');
const input = document.querySelector ('.js_input');
const searchBtn = document.querySelector ('.js_searchBtn');
const resetBtn = document.querySelector ('.js_resetBtn');
const favorites = document.querySelector ('.js_favorites');
const list = document.querySelector ('.js_list');

let searchList = [];



function handleClick (event){
event.preventDefault();
const inputValue = input.value;


fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
.then((response) => response.json())
.then((data)=> {console.log(data);
searchList = data.drinks.map((item)=>{
    const newSearchList = {
        name : item.strDrink,
        image: item.strImageSource,
      id:item.idDrink,
    };
    return newSearchList;
});
console.log(searchList);
});

}


//LISTENERS
searchBtn.addEventListener ('click' , handleClick);
