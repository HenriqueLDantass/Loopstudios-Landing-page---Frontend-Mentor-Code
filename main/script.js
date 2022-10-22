const Btn = document.getElementById('menu-hambuger');
const image = document.getElementById('image');
function toggleHamburger(e) {
    if (e.type === 'touchstart') e.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    e.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        e.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        e.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}
Btn.addEventListener('click', toggleHamburger)
Btn.addEventListener('touchstart', toggleHamburger);



const target = document.querySelectorAll('[data-anime]');
const AnimationClass = 'animate';

function AnimeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 5) / 6);
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(AnimationClass)
        } else {
            element.classList.remove(AnimationClass)
        }
    })
}
AnimeScroll();

if (target.length) {
    window.addEventListener('scroll', function () {
        AnimeScroll();
    })
}
