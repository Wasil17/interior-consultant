const menu = document.querySelector('.menu-btn')
const linksContainer = document.querySelector('.nav-center')

menu.addEventListener('click', () => {
    menu.classList.toggle('open')
    linksContainer.classList.toggle('show-links')
    linksContainer.style.height = 100
})