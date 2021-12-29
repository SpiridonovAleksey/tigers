"use strict";

let tigerContainer = document.querySelector('.elements');
let popUp = document.querySelector('.pop-up')
let popUpOpen = tigerContainer.querySelectorAll('.elements_item');
let closePopUp = document.querySelector('.pop-up_button');
let popUpHeader = document.querySelector('.pop-up_header');
let popUpTitle = document.querySelector('.pop-up_title');
let popUpImg = document.querySelector('.pop-up_image');
let popUpContainer = document.querySelector('.pop-up-container');


popUpOpen.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    popUpContainer.classList.add('active');
    popUp.classList.add('pop-up__open');
    popUpHeader.textContent = button.children[1].textContent;
    popUpTitle.textContent = button.children[2].textContent;
    popUpImg.src = button.children[0].src;

  })
});

closePopUp.addEventListener('click', () => {
  popUpContainer.classList.remove('active');
  popUp.classList.remove('pop-up__open');
});
