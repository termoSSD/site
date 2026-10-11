document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle') || document.querySelector('.menu-toggle-btn');
    const pageWrapper = document.querySelector('.page-wrapper');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle && sidebar) {
        // Універсальна функція перемикання для ПК та телефонів
        const toggleMenu = (e) => {
            e.preventDefault(); // Запобігаємо подвійним спрацьовуванням на сенсорних екранах
            if (window.innerWidth > 900) {
                if (pageWrapper) {
                    pageWrapper.classList.toggle('sidebar-hidden');
                }
            } else {
                sidebar.classList.toggle('open');
            }
        };

        menuToggle.addEventListener('click', toggleMenu);
        menuToggle.addEventListener('touchend', toggleMenu); // Додаємо підтримку тач-екранів
    }

    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900 && sidebar) {
                sidebar.classList.remove('open');
            }
        });
    });
});