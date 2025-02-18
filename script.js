document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Функция для активации секции
    const activateSection = (targetId) => {
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
            }
        });
    };

    // Обработка клика по ссылкам навигации
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            
            // Активируем нужную секцию
            activateSection(targetId);

            // Плавная прокрутка к секции
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Обработка хэша в URL при загрузке страницы
    if (window.location.hash) {
        const targetId = window.location.hash.slice(1);
        activateSection(targetId);
    }
});