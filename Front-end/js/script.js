let menuIcon = document.querySelector('#menu-icon');
let ul = document.querySelector('.nav-list');
let ip = "http://10.26.45.42:5000/api/v1";

menuIcon.addEventListener('click', () => {
    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('#menu-icon img').src = 'img/burger-bar.png'
    }else {
        ul.classList.add('ativo');
        document.querySelector('#menu-icon img').src = 'img/close.png';
    }
})