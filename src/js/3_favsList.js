
 //PINTAR FAVORITOS
 function renderFav(){
    let favsItem = '';
    ulFavoriteList.innerHTML = '';
    
  //Recorro array de favoritos y agrego los datos correspondientes
      for (const eachFav of favoriteList){
          favsItem += `<li class='fav-style js_listItem' id =${eachFav.id}>`;
          favsItem+= `<h3 class ='fav-style__fav-title js_itemTitle '> ${eachFav.name}</h3>`;
          favsItem+=`<div class='close' js_close>`;
          favsItem+= `<p class= close__text>X</p>`;
          favsItem+= `</div>`;
          favsItem += `<img class ='fav-style__fav-image js_itemImage' src = ${eachFav.image} alt  ${eachFav.alt}/></li>`;
          favsItem += `</li>`;
        
      };
  
      ulFavoriteList.innerHTML += favsItem;
   
    }
       
//HandleClick de lista Global






  function handleClickList(event){
//Busco id de cada elemento clicado
    const idItemSelected = event.currentTarget.id;
    console.log(idItemSelected);
   
//Busco si ese elemento clicado esta en la lista GLOBAL
   const itemFound = searchList.find (favoriteItem => {
     return favoriteItem.id === idItemSelected;
   });
  

   const filterFavs = searchList.filter((idFilter)=>
   idFilter.id.includes(idItemSelected));

   if (filterFavs !== undefined){
   favoriteList.push(idItemSelected)
    
   }   else{
       favoriteList.splice(filterFavs,1);
   }

   favoriteList = filterFavs;
/*//Busco si ese elemento clicado está en la lista FAVORITOS
   const itemFoundIndex = favoriteList.findIndex (favoriteItem => {
    return favoriteItem.id === idItemSelected;
  });
//Si no está lo agrego
   if(itemFoundIndex === -1){
     favoriteList.push(itemFound);
//Si está lo quito 
     }else{
       favoriteList.splice(itemFoundIndex, 1);
     }*/







//guardo en LS
    copyInLocalStorage();
//vuelvo a pintar para que aparezca el cambio de estilo al clicar
    renderItem (searchList);
//pinto lista de FAVORITOS
    renderFav();
  
  
    console.log(favoriteList);
  
   }


// Escucho LISTA GLOBAL: click en cada elemento aparecido de la búsqueda principal
        function listenerList(){
            const liItem = document.querySelectorAll('.js_listItem');
            for(const eachListItem of liItem){
              eachListItem.addEventListener('click' , handleClickList);
            }
            }