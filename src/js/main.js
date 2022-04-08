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
ulList.innerHTML = '';

/*for (const eachItem of searchList){
  //let textClicked = '' ;
  let clickedStyle = '';

const itemFoundIndex = favoriteList.findIndex (favoriteItem => {
  return favoriteItem.id === eachItem.id;
});

if (itemFoundIndex !== -1){

  clickedStyle= 'preview--clicked';
}else{
  clickedStyle = '';
}*/


for (const eachItem of searchList){
//console.log(eachItem);

if (eachItem.image === ''){
  //LI
const li = document.createElement('li');
ulList.appendChild(li);
li.setAttribute(`${eachItem.id}`,'js_listItem' );
li.appendChild (`${eachItem.id}`,'js_listItem' );
//H3
const h3 =document.createElement('h3');
li.appendChild(h3);
const titleH3 = document.createTextNode(` ${eachItem.name}`);
h3.appendChild(` ${eachItem.name}`);
h3.classList.add('title');
//IMAGE
const img = document.createElement('img');
li.appendChild(img);
image.setAttribute('src' , 'https://via.placeholder.com/210x295/ffffff/666666/?text=cóctel' ,'alt'  `${eachItem.alt}`);
img.classList.add('image');
}else{
  //LI
  const li = document.createElement('li');
  ulList.appendChild(li);
  li.setAttribute`${eachItem.id}` , 'js_listItem' ;
  li.appendChild (`${eachItem.id}`,'js_listItem' );
  //H3
  const h3 =document.createElement('h3');
  li.appendChild(h3);
  const titleH3 = document.createTextNode(` ${eachItem.name}`);
  h3.appendChild(` ${eachItem.name}`);
  h3.classList.add('title');
  //IMAGE
  const img = document.createElement('img');
  li.appendChild(img);
  image.setAttribute('src' , `${eachItem.image}`, 'alt'  `${eachItem.alt}`);
  img.classList.add('image');





  /*listItem += `<li class='js_listItem' id =${eachItem.id}>`;
  listItem += `<h3 class='title js_itemTitle'> ${eachItem.name}</h3>`;
  listItem += `<img class= 'image js_itemImage ' src = 'https://via.placeholder.com/210x295/ffffff/666666/?text=cóctel' alt  ${eachItem.alt}/>`;
  listItem += `</li>`;*/


listItem += `<li class='js_listItem' id =${eachItem.id}>`;
listItem += `<h3 class ='title js_itemTitle'> ${eachItem.name}</h3>`;
listItem += `<img class ='image js_itemImage ' src = ${eachItem.image} alt  ${eachItem.alt}/></li>`;
listItem += `</li>`;
}
};

ulList.innerHTML += listItem;
listenerList();
}

  //FUNCION LISTENER DE LA LIST
  function listenerList(){
    const liItem = document.querySelectorAll('.js_listItem');
    for(const eachListItem of liItem){
      eachListItem.addEventListener('click' , handleClickList);
    }
    }



//FAVORITOS
let favoriteList = [];


  //FUNCION CLICK LIST
  function handleClickList(event){
    console.log('click');
  const idItemSelected = event.currentTarget.id;
  console.log(idItemSelected);
 
// BUSCO EN LIST
 const itemFound = searchList.find (favoriteItem => {
   return favoriteItem.id === idItemSelected;
 });

 //BUSCO EN FAVORITOS
 const itemFoundIndex = favoriteList.findIndex (favoriteItem => {
  return favoriteItem.id === idItemSelected;
});

 if(itemFoundIndex === -1){
   favoriteList.push(itemFound);

   }else{
     favoriteList.splice(itemFoundIndex, 1);
   }
   console.log(favoriteList);
 }


//LISTENER BOTON SEARH
searchBtn.addEventListener ('click' , handleClick);

