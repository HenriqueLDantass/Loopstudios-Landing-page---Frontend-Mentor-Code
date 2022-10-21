const Btn = document.getElementById('menu-hambuger');
const image = document.getElementById('image');
function toggleHamburger(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}
Btn.addEventListener('click', toggleHamburger)
Btn.addEventListener('touchstart', toggleHamburger);
