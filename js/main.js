document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const pageWrapper = document.querySelector('.page-wrapper');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            if (window.innerWidth > 900) {
                pageWrapper.classList.toggle('sidebar-hidden');
            } else {
                sidebar.classList.toggle('open');
            }
        });
    }

    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                sidebar.classList.remove('open');
            }
        });
    });
});