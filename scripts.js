document.querySelectorAll('.menuToggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelectorAll('.dropdown-menu').forEach(function(menu) {
            if (menu !== toggle.nextElementSibling) {
                menu.classList.remove('show');
                // Remove active das outras setas
                if (menu.previousElementSibling) {
                    menu.previousElementSibling.classList.remove('active');
                }
            }
        });

        toggle.nextElementSibling.classList.toggle('show');
        toggle.classList.toggle('active'); // <-- Adicione esta linha
    });
});
