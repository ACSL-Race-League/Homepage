const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.offscreen');

hamMenu.addEventListener('click', () => {hamMenu.classList.toggle('active');offScreenMenu.classList.toggle('active');document.body.classList.toggle('no-scroll');});