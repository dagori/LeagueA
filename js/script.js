'use strict';
const buttonConsultation = document.querySelector('.presentation__consultation');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const buttonClose = popup.querySelector('.popup__button');

buttonConsultation.addEventListener('click', () => {
  overlay.style.display = 'block';
  popup.style.display = 'block';
});

document.addEventListener('click', ({target}) => {
  if(target === buttonClose || target === overlay) {
    popup.style.display = 'none';
    overlay.style.display = 'none';
  }
});
