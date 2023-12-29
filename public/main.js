// ctToggleTopMenu.add

const ctToggleTopMenu = document.getElementById('ct-toggle-top-menu')
const ctMenu = document.getElementById('ct-menu')
document.addEventListener('click',(e) => {
    if (ctToggleTopMenu.contains(e.target)) {
        ctMenu.classList.toggle('ct-top-menu-expanded')
        ctMenu.classList.toggle('hidden')
    } else {
        if(ctMenu.classList.contains('ct-top-menu-expanded')) {
            ctMenu.classList.remove('ct-top-menu-expanded')
            ctMenu.classList.add('hidden')
        }
    }
})
