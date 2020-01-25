'use strict';


let getCookie = (name) => {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts
    .pop()
    .split(";")
    .shift();
  }
}

window.onload = function() {    
  if(getCookie('popup') === 'closed') {        
    return false;   
  }

  const elClose = document.getElementById('subscribe-modal');
  const elModalClose = document.querySelector('.modal__close');

  elClose.classList.add('modal_active');
    
  elModalClose.addEventListener('click', function() {
    elClose.classList.remove('modal_active');
    document.cookie = 'popup=closed';         
  }

)}
