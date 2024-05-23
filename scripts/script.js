document.addEventListener('DOMContentLoaded', function () {
    const userIcon = document.getElementById('userIcon');
    const logoutPopup = document.getElementById('logoutPopup');
    const logoutLink = document.getElementById('logoutLink');

    userIcon.addEventListener('click', function () {
        logoutPopup.style.display = logoutPopup.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', function (e) {
        if (!userIcon.contains(e.target) && !logoutPopup.contains(e.target)) {
            logoutPopup.style.display = 'none';
        }
    });
});