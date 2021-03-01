import Swiper from 'swiper';

// import 'swiper/swiper-bundle.css'; // - почему не работает?????? Вместо этого подключил в style.scss файл css из node_modules: @import '../../node_modules/swiper/swiper-bundle.css';

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







