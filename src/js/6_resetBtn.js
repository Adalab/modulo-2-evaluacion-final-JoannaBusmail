'use strict';
function handleResetBtn(event) {
  event.preventDefault();
  ulFavoriteList.innerHTML = '';
  console.log('holareset');
}

function listenerResetBtn() {
  resetBtn.addEventListener('click', handleResetBtn);
}
