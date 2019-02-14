const menuHamburguer = document.querySelector('menu-hamburguer');
const navMenuHamburguer = document.querySelector('.nav-menu-hamburguer');

const atualizarMenu = function() {
    navMenuHamburguer.classList.toggle ('visivel');
}

menuHamburguer.onclick = atualizarMenu;