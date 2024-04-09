document.addEventListener('DOMContentLoaded', function () {
    const menuCheckbox = document.getElementById('menu');
    const menuImg = document.getElementById('menuImg');

    menuCheckbox.addEventListener('change', function () {
        if (menuImg.src.includes('menu.png')) {
            menuImg.src = 'x.jpg';
        } else {
            menuImg.src = 'menu.png';
        }
    });
});
