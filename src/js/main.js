'use strict';

//CONSTANTES DE ELEMENTOS HTML

const form = document.querySelector('.js_form');
const input = document.querySelector ('.js_input');
const searchBtn = document.querySelector ('.js_searchBtn');
const resetBtn = document.querySelector ('.js_resetBtn');
const favorites = document.querySelector ('.js_favorites');
const ulList = document.querySelector ('.js_list');

//VARIABLE DE INFO ITEMS API
let searchList = [];




//CLICK BUSCAR
function handleClick (event){
  event.preventDefault();
  const inputValue = input.value;
  //PETICION SERVIDOR
  fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
  .then((response) => response.json())
  .then((data)=> {
    console.log(data);
    searchList = data.drinks.map((item)=>{
      const newSearchList = {
          name : item.strDrink,
          image: item.strDrinkThumb,
          alt:item.strImageAttributio,
          id:item.idDrink,
      };
      return newSearchList;
  });

  renderItem(searchList);
  console.log(searchList);
  
  });
  
  }

// PINTAR
function renderItem (searchList){
 //VARIABLE DE PAINT FUNCTION
let listItem = ''; 
ulList.innerHTML += '';

for (const eachItem of searchList){
console.log(eachItem);

if (eachItem.image === ''){
  listItem += `<li class='js_listItem' id =${eachItem.id}><h3 js_itemTitle'> ${eachItem.name}</h3><img js_itemImage' src = 'https://via.placeholder.com/210x295/ffffff/666666/?text=cóctel' alt  ${eachItem.alt}/></li>`;


}else{
listItem += `<li class='js_listItem' id =${eachItem.id}><h3 class ='title js_itemTitle'> ${eachItem.name}</h3><img class ='image js_itemImage' src = ${eachItem.image} alt  ${eachItem.alt}/></li>`;

}};

ulList.innerHTML += listItem;



}



//LISTENERS
searchBtn.addEventListener ('click' , handleClick);

