
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function (dropdown) {
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('mouseover', function () {
        closeAllDropdownsExcept(dropdownMenu);
        dropdownMenu.classList.add('show');
    });

    dropdownMenu.addEventListener('mouseleave', function () {
        dropdownMenu.classList.remove('show');
    });

    const dropdownItems = dropdownMenu.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const href = event.target.getAttribute('href');

            window.location.href = href;
        });
    });
});


function closeAllDropdownsExcept(exceptMenu) {
    dropdowns.forEach(function (dropdown) {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        if (dropdownMenu !== exceptMenu) {
            dropdownMenu.classList.remove('show');
        }
    });
}
