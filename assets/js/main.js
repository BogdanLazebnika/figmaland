const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu__list');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');

    if (menuList.style.height && menuList.style.height !== '0px') {
        // закриваємо меню
        menuList.style.height = '0px';
    } else {
        // відкриваємо меню
        menuList.style.height = menuList.scrollHeight + 'px';
    }
});
