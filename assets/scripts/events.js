const button = document.querySelector('button');

const buttonClickHandler = (event) => {
  console.log('clicked button');
  event.stopImmediatePropagation();
};

// // setTimeout(() => {
// //   button.removeEventListener('click', buttonClickHandler);
// // }, 41000);

// window.addEventListener('scroll', (event) => {});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  console.info(event);
  event.preventDefault();
});

const div = document.querySelector('div');

div.addEventListener('click', (event) => {
  console.log('clicked div');
});

button.addEventListener('click', buttonClickHandler);

const list = document.querySelector('ul');

list.addEventListener('click', function (event) {
  //  event.target.classList.toggle('highlight');
  event.target.closest('li').classList.toggle('highlight');
  // form.submit();
  form.querySelector('button').click();
  console.log(event.currentTarget === this);
});
