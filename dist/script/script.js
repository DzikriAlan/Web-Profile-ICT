const hamburger = document.querySelector("#hamburger");
const navmenu = document.querySelector("#navmenu");

// hamburger di klik navmenu link turun
hamburger.addEventListener('click', () => {
    navmenu.classList.toggle('navmenu-naik');
    navmenu.classList.toggle('navmenu-turun');
})

document.querySelectorAll('.navlist').forEach(e => {
    e.addEventListener('click', () => {
        navmenu.classList.toggle('navmenu-naik');
        navmenu.classList.toggle('navmenu-turun');
    })
})

// window di scroll navbar nya ilang
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-Top');

    if (window.pageYOffset > fixedNav) {
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
})

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}

// Darkmode toggle
const darkToggleMobile = document.querySelector('#dark-toggle-2');
const htmlDua = document.querySelector('html');

darkToggleMobile.addEventListener('click', function () {
    if (darkToggleMobile.checked) {
        htmlDua.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        htmlDua.classList.remove('dark');
        localStorage.theme = 'light';
    }
})

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggleMobile.checked = true;
} else {
    darkToggleMobile.checked = false;
}