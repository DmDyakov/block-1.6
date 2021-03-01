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