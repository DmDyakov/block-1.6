

let mySwiper;
let swiperOn;
 
let changeSwiper = () => {        
    if (document.documentElement.clientWidth >= 768 && swiperOn == 1) {
        swiperOn = 0
        console.log(swiperOn);
        mySwiper.destroy();
       
    } else {
        mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            // spaceBetween: 16,               
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },              
        });        
        swiperOn = 1;
        console.log(swiperOn);
    }
}

// ================

let changeBtn = document.querySelectorAll('.slider__change-size-btn');
for (let elem of changeBtn) {
    elem.textContent = 'Показать все';    
}


let sliderWrapper = document.querySelectorAll('.slider__wrapper');


let show = (i) => {
    changeBtn[i].textContent = 'Скрыть'; 
    sliderWrapper[i].classList.add('show');
    console.log("show");
}

let hide = (i) => {
    changeBtn[i].textContent = 'Показать все';
    sliderWrapper[i].classList.remove('show')
    console.log("show");
}

// ================

changeSwiper();

window.addEventListener('resize', () => {
    console.log("обработчик срабатывает на изменение экрана")
    changeSwiper(); 
    hide(0);
    hide(1);
    
});

changeBtn[0].addEventListener('click',  () => {
    if (changeBtn[0].textContent == 'Показать все') {
        show(0);
        console.log("show");
    } else {
        hide(0);
        console.log("hide");
    }  
    
});



