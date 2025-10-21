const menuToggle = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu__list');
const header = document.getElementById('header');

// Функція для відкриття меню
function openMenu() {
    menuToggle.classList.add('active');
    menuList.style.height = menuList.scrollHeight + 'px';
}

// Функція для закриття меню
function closeMenu() {
    menuToggle.classList.remove('active');
    menuList.style.height = '0px';
}

// Перемикання меню при натисканні на гамбургер
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // не спрацьовує глобальний клік
    if (menuToggle.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Закриття меню при кліку поза шапкою
document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) {
        closeMenu();
    }
});

// Закриття меню при скролі
window.addEventListener('scroll', () => {
    if (menuToggle.classList.contains('active')) {
        closeMenu();
    }
});

// Адаптив: автоматичне скидання inline height при resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        menuList.style.height = 'auto';
    } else if (!menuToggle.classList.contains('active')) {
        menuList.style.height = '0px';
    }
});
