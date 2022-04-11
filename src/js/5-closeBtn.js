'use strict';

function handleClickCloseBtn(event) {
  event.preventDefault();
  const idItemSelected = event.currentTarget.id;
  const itemFoundIndex = favoriteList.findIndex((favoriteItem) => {
    return favoriteItem.id === idItemSelected;
  });
  if (itemFoundIndex === -1) {
    favoriteList.splice(itemFoundIndex, 1);
  }

  renderFav();
  renderItem(searchList);
  copyInLocalStorage();
}

// Escucho boton close lista favs
function listenerCloseBtn() {
  const closeX = document.querySelectorAll('.js_closeBtn');
  for (const eachBtn of closeX) {
    eachBtn.addEventListener('click', handleClickCloseBtn);
  }
}
