'use strict';

//CONSTANTES DE ELEMENTOS HTML

const form = document.querySelector('.js_form');
const input = document.querySelector ('.js_input');
const searchBtn = document.querySelector ('.js_searchBtn');
const resetBtn = document.querySelector ('.js_resetBtn');
const ulFavoriteList = document.querySelector ('.js_favorites');
const ulList = document.querySelector ('.js_list');

// *****  VARIABLE DONDE GUARDO CADA ELEMENTO BUSCADO DE LA API*****
let searchList = [];




// *****    FUNCION CLICK BUSCAR ******
//1. función handle del click del boton buscar
//2. guardo en constante el valor de esa busqueda
function handleClick (event){
  event.preventDefault();
  const inputValue = input.value;
// 3.pido al servidor lo que he buscado
  fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
  .then((response) => response.json())
  .then((data)=> {
    console.log(data);
//4. mapeo - solo necesito 4 cosas de la api
    searchList = data.drinks.map((item)=>{
      const newSearchList = {
          name : item.strDrink,
          image: item.strDrinkThumb,
          alt:item.strImageAttributio,
          id:item.idDrink,
      };
      return newSearchList;
  });
//.5 pinto la lista buscada
  renderItem(searchList);
  console.log(searchList);
  
  });
  
  }




// ********   FUNCION  PINTAR ***********

function renderItem (searchList){
 //1. Creo variable para pintar todos los elementos de la api
let listItem = ''; 
// 2. variable para que cuando hago una nueva busqueda me limpie la anterior
ulList.innerHTML = '';



// 3. recorro cada elemento de mi array
for (const eachItem of searchList){
//console.log(eachItem);

//4. variables para guardar cambios de estilo
let favTitle = '';
let favImage = '';

 //5.busco si el item esta en favoritos (si he hecho click)
 const itemFoundIndex = favoriteList.findIndex (favoriteItem => {
  return favoriteItem.id === eachItem.id;
});
//6.si está cambio de color al titulo
if(itemFoundIndex !== -1){
  favTitle = 'fav-style__fav-title';
}else{
  favTitle = '';
}

//6.si está cambio de color al borde
if(itemFoundIndex !== -1){
  favImage = 'fav-style__fav-image';
}else{
  favImage = '';
}

//Ej. 1 - 1. Si el item no tiene imagen pinto placeholder
if (eachItem.image === ''){
  listItem += `<li class='style js_listItem ' id =${eachItem.id}>`;
  listItem += `<h3 class='style__title js_itemTitle ${favTitle}'> ${eachItem.name}</h3>`;
  listItem += `<img class= 'style__image js_itemImage ${favImage}' src = 'https://via.placeholder.com/210x295/ffffff/666666/?text=cóctel' alt  ${eachItem.alt}/>`;
  listItem += `</li>`;

//2. si tiene imagen pinto imagen
}else{
listItem += `<li class='style js_listItem' id =${eachItem.id}>`;
listItem += `<h3 class ='style__title js_itemTitle ${favTitle}'> ${eachItem.name}</h3>`;
listItem += `<img class ='style__image js_itemImage ${favImage} ' src = ${eachItem.image} alt  ${eachItem.alt}/></li>`;
listItem += `</li>`;
}
};

ulList.innerHTML += listItem;
//llamo a la funcion que recorre mi  array de 'LIST'
listenerList();
}



   // ******   FUNCION LISTENER DE LA LIST *****
   function listenerList(){
    const liItem = document.querySelectorAll('.js_listItem');
    for(const eachListItem of liItem){
      eachListItem.addEventListener('click' , handleClickList);
    }
    }

// *********    FAVORITOS   *******
let favoriteList = [];


  //*********  FUNCION CLICK LIST   *******
  function handleClickList(event){
    console.log('click');
  const idItemSelected = event.currentTarget.id;
  console.log(idItemSelected);
 
// busco en list
 const itemFound = searchList.find (favoriteItem => {
   return favoriteItem.id === idItemSelected;
 });

 //busco en favoritos
 const itemFoundIndex = favoriteList.findIndex (favoriteItem => {
  return favoriteItem.id === idItemSelected;
});

 if(itemFoundIndex === -1){
   favoriteList.push(itemFound);

   }else{
     favoriteList.splice(itemFoundIndex, 1);
   }
   //vuelvo a pintar para que aparezca el cambio en click
  renderItem (searchList);
  renderFav();
  console.log(favoriteList);
 }

// ***** FUNCION PINTAR FAVORITOS ******
function renderFav(){
let favsItem = '';
  ulFavoriteList.innerHTML = '';

  //recorro array de favoritos
  for (const eachFav of favoriteList){
      favsItem += `<li class='fav-style js_listItem' id =${eachFav.id}>`;
      favsItem+= `<h3 class ='fav-style__fav-title js_itemTitle '> ${eachFav.name}</h3>`;
      favsItem += `<img class ='fav-style__fav-image js_itemImage' src = ${eachFav.image} alt  ${eachFav.alt}/></li>`;
      favsItem += `</li>`;
    
  };
  ulFavoriteList.innerHTML += favsItem;


}






function handleSubmit (event){
  event.preventDefault();
}

//*******   LISTENER BOTON SEARCH ****
searchBtn.addEventListener ('click' , handleClick);
form.addEventListener('click' , handleSubmit);