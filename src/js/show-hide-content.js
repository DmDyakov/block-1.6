const readMoreBtn = document.querySelector('.article__read-more-btn');
const hiddenArticleTexts = document.querySelectorAll('.article__text--hidden')

for (let hiddenArticleText of hiddenArticleTexts) {
    readMoreBtn.addEventListener('click', () => {     
    showHideTextFunc(hiddenArticleText);
    });
    window.addEventListener('resize', () => {
    hideText(hiddenArticleText);         
    });
}

let showText = (hiddenText) => {
  readMoreBtn.textContent = 'Скрыть текст';  
  hiddenText.classList.add('show-hidden-text');          
} 

let hideText = (hiddenText) => {  
  readMoreBtn.textContent = 'Читать далее';
  hiddenText.classList.remove('show-hidden-text');  
}  


let showHideTextFunc = (hiddenText) => {
  if (readMoreBtn.textContent == 'Читать далее') {
    showText(hiddenText);
  } else {
    hideText(hiddenText);  
  }       
}

//=========================================================

const changeSizeBtns = document.querySelectorAll('.change-size-btn');
const sliderWrappers = document.querySelectorAll('.slider__wrapper');

for (let i = 0; i < changeSizeBtns.length; i++) {
  changeSizeBtns[i].addEventListener('click', () => {      
    showHideListFunc(i);
  });
}

for (let i = 0; i < changeSizeBtns.length; i++) {
  window.addEventListener('resize', () => { 
  hideList(i)   
  });
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