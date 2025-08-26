document.querySelectorAll('.menuToggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
            if (menu !== toggle.nextElementSibling) {
                menu.classList.remove('show');

                if (menu.previousElementSibling) {
                    menu.previousElementSibling.classList.remove('active');
                }
            }
        });

        toggle.nextElementSibling.classList.toggle('show');
        toggle.classList.toggle('active');
    });
});

document.addEventListener('click', function(e) {

    if (!e.target.closest('nav')) {
        document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
            menu.classList.remove('show');
        });
        document.querySelectorAll('.menuToggle').forEach(function(toggle) {
            toggle.classList.remove('active');
        });
    }
});
