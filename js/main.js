document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const pageWrapper = document.querySelector('.page-wrapper');
    const sidebar = document.querySelector('.sidebar');
    const isMobile = () => window.innerWidth <= 900;

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            if (isMobile()) {
                sidebar.classList.toggle('open');
            } else if (pageWrapper) {
                pageWrapper.classList.toggle('sidebar-hidden');
            }
        });

        // Тап повз меню закриває його
        document.addEventListener('click', (e) => {
            if (isMobile() &&
                sidebar.classList.contains('open') &&
                !sidebar.contains(e.target) &&
                !menuToggle.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        });

        // Якщо розтягнули вікно до десктопного розміру, прибираємо мобільний стан
        window.addEventListener('resize', () => {
            if (!isMobile()) sidebar.classList.remove('open');
        });
    }

    // Після вибору пункту меню на телефоні закриваємо його
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (isMobile() && sidebar) sidebar.classList.remove('open');
        });
    });
});