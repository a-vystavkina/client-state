'use strict';

const elModalClose = document.querySelector('.modal__close');
const elClose = document.getElementById('subscribe-modal');


const getCookie = (e) => {
  const arrCookie = document.cookie.split("; " + e + "=");
  return arrCookie;
}

window.onload = function() {    
    if(getCookie('popup') === 'closed') {        
        return false;   
    }
    
    elClose.classList.add('modal_active');

    elClose.addEventListener('click', function() {
        elClose.classList.remove('modal_active');
        document.cookie = 'popup=closed';         
    });

    document.cookie = 'popup=closed; Expires=Thu, 01 Jan 1970 00:00:00 GMT';  
}
