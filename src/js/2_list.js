'use strict';

// ********   FUNCION  PINTAR ***********

function renderItem(searchList) {
  //variable para pintar todos los elementos de la api
  let listItem = '';
  //variable para que cuando hago una nueva busqueda me limpie la anterior
  ulList.innerHTML = '';

  //recorro cada elemento de mi array
  for (const eachItem of searchList) {
    //variables para guardar cambios de estilo
    let favTitle = '';
    let favImage = '';

    //busco si el item esta en favoritos (si he hecho click)
    const itemFoundIndex = favoriteList.findIndex((favoriteItem) => {
      return favoriteItem.id === eachItem.id;
    });
    //si está cambio de color al titulo
    if (itemFoundIndex !== -1) {
      favTitle = 'fav-style__fav-title';
    } else {
      favTitle = '';
    }

    //si está cambio de color al borde
    if (itemFoundIndex !== -1) {
      favImage = 'fav-style__fav-image';
    } else {
      favImage = '';
    }

    //Si el item no tiene imagen pinto placeholder
    if (eachItem.image === '') {
      listItem += `<li class='style js_listItem'  id =${eachItem.id}>`;
      listItem += `<h3 class='style__title js_itemTitle ${favTitle}'> ${eachItem.name}</h3>`;
      listItem += `<img class= 'style__image js_itemImage ${favImage}' src = 'https://via.placeholder.com/210x295/ffffff/666666/?text=cóctel' alt  ${eachItem.alt}/>`;
      listItem += `</li>`;

      //Si tiene imagen pinto imagen
    } else {
      listItem += `<li class='style js_listItem' id =${eachItem.id}>`;
      listItem += `<h3 class ='style__title js_itemTitle ${favTitle}'> ${eachItem.name}</h3>`;
      listItem += `<img class ='style__image js_itemImage ${favImage} ' src = ${eachItem.image} alt  ${eachItem.alt}/></li>`;
      listItem += `</li>`;
    }
  }

  ulList.innerHTML += listItem;
  //llamo a la funcion que recorre y escucha mi  array de 'LIST'
  listenerList();
}
