const hamopen = document.querySelector('.ham');
const hamclose = document.querySelector('.hamclose');
const mainnav = document.querySelector('.navigation')

hamopen.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
hamclose.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);