'use strict';


//pido al servidor lo que he buscado
function getInfoApi(){
  const inputValue = input.value;
  fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then((response) => response.json())
    .then((data)=> {
      console.log(data);
      //mapeo - solo necesito 4 cosas de la api
      searchList = data.drinks.map((item)=>{
        const newSearchList = {
          name : item.strDrink,
          image: item.strDrinkThumb,
          alt:item.strImageAttributio,
          id:item.idDrink,
        };
        return newSearchList;
      });
      //pinto la lista buscada en List
      renderItem(searchList);
      //pinto la lista de favs
      renderFav();

    });
}

function handleClick (event){
  event.preventDefault();
  //cuando hago click necesito llamar a la info del servidor
  getInfoApi();
}

searchBtn.addEventListener ('click' , handleClick);
