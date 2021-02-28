
import '../scss/style.scss';

import Swiper from 'swiper';

// import 'swiper/swiper-bundle.css'; // - почему не работает?????? Подключил в style.scss файл css из node_modules: @import '../../node_modules/swiper/swiper-bundle.css';

import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);


let swiperOn;
let mySwiper;

let changeSwiper = () => {        
  if (document.documentElement.clientWidth < 768 && swiperOn != 1) {
    mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',                    
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },              
  });        
  swiperOn = 1;
  console.log(swiperOn);
      
     
  } else if (document.documentElement.clientWidth >= 768 && swiperOn == 1) {
    swiperOn = 0    
    document.location.reload() // приходится перезагрузить страницу
    // mySwiper.destroy(); почему не работает, не понятно:(((
      
    }  
          
  
}
 
changeSwiper();

window.addEventListener('resize', () => {
  // console.log("обработчик срабатывает на изменение экрана")
  changeSwiper();

});
// let swiper = new Swiper('.swiper-container', {
//             slidesPerView: 'auto',
//             // spaceBetween: 16,               
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true,
//             },              
//         });     
   
// require('./slider');


console.log('Works!');
const page = document.querySelector('.page');
const readMoreBtn = document.querySelector('.article__read-more-btn');
const changeSizeBtns = document.querySelectorAll('.change-size-btn');
const sliderWrappers = document.querySelectorAll('.slider__wrapper');
const hiddenArticleXsText = document.querySelector('.article__text--hidden-xs')
const hiddenArticleXsSmMdText = document.querySelector('.article__text--hidden-xs-sm-md')
const hiddenArticleXsSmMdLgText = document.querySelector('.article__text--hidden-xs-sm-md-lg')

readMoreBtn.addEventListener('click', () => {  
  showHideTextFunc();
});

for (let i = 0; i < changeSizeBtns.length; i++) {
  changeSizeBtns[i].addEventListener('click', () => {      
    showHideListFunc(i);
  });
}

for (let i = 0; i < changeSizeBtns.length; i++) {
  window.addEventListener('resize', () => {
  hideText();
  hideList(i)   
  });
}


let showText = () => {
    readMoreBtn.textContent = 'Скрыть текст';  
    hiddenArticleXsText.classList.add('show-hidden-text');
    hiddenArticleXsSmMdText.classList.add('show-hidden-text');
    hiddenArticleXsSmMdLgText.classList.add('show-hidden-text');
    console.log("show")
} 

let hideText = () => {  
  readMoreBtn.textContent = 'Читать далее';
  hiddenArticleXsText.classList.remove('show-hidden-text');
  hiddenArticleXsSmMdText.classList.remove('show-hidden-text');
  hiddenArticleXsSmMdLgText.classList.remove('show-hidden-text');
}  

let showHideTextFunc = () => {
  if (readMoreBtn.textContent == 'Читать далее') {
    showText();
  } else {
    hideText();  
  }       
}

let showList = (i) => {  
  changeSizeBtns[i].textContent = 'Скрыть';
  sliderWrappers[i].classList.add('show');      
}

let hideList = (i) => {  
  changeSizeBtns[i].textContent = 'Показать все';
  sliderWrappers[i].classList.remove('show');     
}

let showHideListFunc = (i) => {  
  if (changeSizeBtns[i].textContent == 'Показать все') {
    showList(i)        
  } else {
    hideList(i)
  }          
}

//==========================

const burgerBtn = document.querySelector('.btn--burger');
const callBtns = document.querySelectorAll('.btn--call');
const chatBtns = document.querySelectorAll('.btn--chat');

const modalMenu = document.querySelector('.modal-menu');
const modalCall = document.querySelector('.modal-call');
const modalFeedback = document.querySelector('.modal-feedback');

const closeBtns = document.querySelectorAll('.btn--close');
const modals = document.querySelectorAll('.modal');


burgerBtn.addEventListener('click', () => {  
  showModal(modalMenu);
  hideModal(modalFeedback);
  hideModal(modalCall);
  getblurPage();
});

for (let callBtn of callBtns) {
  callBtn.addEventListener('click', () => {    
    showModal(modalCall);
    hideModal(modalFeedback);
    hideModal(modalMenu);
    getblurPage();
  });
}

for (let chatBtn of chatBtns) {
  chatBtn.addEventListener('click', () => {    
    showModal(modalFeedback);
    hideModal(modalCall);
    hideModal(modalMenu);
    getblurPage();
  });
}

for (let i = 0; i < modals.length; i++) {
  closeBtns[i].addEventListener('click', () => {
    hideModal(modals[i]);
    removeblurPage();
  });
}



let showModal = (modal) => {
  modal.classList.add('modal--show-modal');  
}

let hideModal = (modal) => {
  modal.classList.remove('modal--show-modal');  
}

let getblurPage = () => {
  page.classList.add('page--blur');  
}

let removeblurPage = () => {
  page.classList.remove('page--blur');  
}



