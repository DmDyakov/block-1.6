const page = document.querySelector('.page');

const burgerBtn = document.querySelector('.btn--burger');
const callBtns = document.querySelectorAll('.btn--call');
const chatBtns = document.querySelectorAll('.btn--chat');

const modalMenu = document.querySelector('.modal-menu');
const modalCall = document.querySelector('.modal-call');
const modalFeedback = document.querySelector('.modal-feedback');
const modals = document.querySelectorAll('.modal');

const closeBtns = document.querySelectorAll('.btn--close');


burgerBtn.addEventListener('click', () => {  
  showModal(modalMenu);
  hideModal(modalFeedback);
  hideModal(modalCall);
  setBlur(page);
});

for (let callBtn of callBtns) {
    callBtn.addEventListener('click', () => {    
    showModal(modalCall);
    hideModal(modalFeedback);
    hideModal(modalMenu);
    setBlur(page);
    setBlur(modalMenu);
  });
}

for (let chatBtn of chatBtns) {
  chatBtn.addEventListener('click', () => {    
    showModal(modalFeedback);
    hideModal(modalCall);
    hideModal(modalMenu);
    setBlur(page);
    setBlur(modalMenu);
  });
}

for (let i = 0; i < modals.length; i++) {
  closeBtns[i].addEventListener('click', () => {
    hideModal(modals[i]);
    removeBlur(page);
    removeBlur(modalMenu); 
  });  
}



page.addEventListener('click', (evt) => {  
  if (evt.target != burgerBtn && evt.target != callBtns[1] && evt.target != chatBtns[1]) {
    hideModal(modalMenu);
    hideModal(modalCall);
    hideModal(modalFeedback);
    removeBlur(page);
    removeBlur(modalMenu);
  }  
});

modalMenu.addEventListener('click', (evt) => {  
  if (evt.target != burgerBtn && evt.target != callBtns[0] && evt.target != chatBtns[0]) {
    hideModal(modalCall);
    hideModal(modalFeedback);
    if (modalMenu.classList.contains('blur')) {
      removeBlur(page);
      removeBlur(modalMenu);
    }    
  }  
});

let showModal = (modal) => {
  modal.classList.add('modal--show-modal');  
}

let hideModal = (modal) => {
  modal.classList.remove('modal--show-modal');  
}


let setBlur = (block) => {
  let blockBtns = block.getElementsByTagName('button');
  let blockLinks = block.getElementsByTagName('a');
  for (let btn of blockBtns) {
    btn.setAttribute('disabled', 'disabled');
    btn.classList.add('link--disabled')
  }
  for (let link of blockLinks) {
    link.classList.add('link--disabled')
  }
  block.classList.add('blur');  
}

let removeBlur = (block) => { 
  let blockBtns = block.getElementsByTagName('button');
  let blockLinks = block.getElementsByTagName('a');
  for (let btn of blockBtns) {
    btn.removeAttribute('disabled', 'disabled');
    btn.classList.remove('link--disabled')
  }
  for (let link of blockLinks) {
    link.classList.remove('link--disabled')
  }  
 block.classList.remove('blur');  
}