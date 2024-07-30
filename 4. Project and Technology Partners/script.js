
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => {
                c.classList.remove('active');
                c.style.display = 'none';
            });

            tab.classList.add('active');
            const activeContent = document.querySelector(`#${tab.dataset.tab}`);
            activeContent.classList.add('active');
            activeContent.style.display = 'block';
        });
    });
});
