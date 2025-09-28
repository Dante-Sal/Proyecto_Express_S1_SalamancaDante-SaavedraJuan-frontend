document.addEventListener('DOMContentLoaded', async () => {
    const sidebar_logout = document.getElementById('sidebar-logout');
    const avatar_image = document.getElementById('avatar-image');
    const profile_username = document.getElementById('profile-username');
    const API = 'https://proyecto-express-s1-salamancadante.onrender.com';
    const ROOT = '/Proyecto_Express_S1_SalamancaDante-SaavedraJuan-frontend';

    const meResponse = await fetch(`${API}/users/me`, { credentials: 'include' });
    const meResult = await meResponse.json();

    if (meResponse.status === 401) { window.location.href = window.location.origin + ROOT + meResult.redirect; return; };

    if (meResult.ok) {
        const data = meResult.document;
        if (data.role === 'admin') { window.location.href = window.location.origin + ROOT + data.redirect.admin; return; };

        avatar_image.style.backgroundImage = `url("${data.avatar_url}")`;
        profile_username.innerText = `@${data.username}`;
    };

    sidebar_logout.addEventListener('click', async () => {
        const logOutResponse = await fetch(`${API}/users/logout`, { credentials: 'include' });
        const logOutResult = await logOutResponse.json();
        if (logOutResult.redirect) window.location.href = window.location.origin + ROOT + logOutResult.redirect;
    });
});