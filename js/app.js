document.querySelectorAll('.main-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');

        // Змінити активний таб
        document.querySelectorAll('.main-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Змінити активний контент
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
            if (content.id === target) content.classList.add('active');
        });
    });
});