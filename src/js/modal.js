const page = document.querySelector('.page');

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



page.addEventListener('click', (evt) => {  
  if (evt.target != burgerBtn && evt.target != callBtns[1] && evt.target != chatBtns[1]) {
    removeblurPage();
    hideModal(modalMenu);
    hideModal(modalCall)
    hideModal(modalFeedback)
  }
  
  
});


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