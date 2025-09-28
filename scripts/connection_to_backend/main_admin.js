document.addEventListener('DOMContentLoaded', async () => {
    const sidebar_logout = document.getElementById('sidebar-logout');
    const avatar_image = document.getElementById('avatar-image');
    const profile_username = document.getElementById('profile-username');
    
    const meResponse = await fetch('https://proyecto-express-s1-salamancadante.onrender.com/users/me', { credentials: 'include' });
    const meResult = await meResponse.json();
    
    if (meResponse.status === 401) { window.location.href = window.location.origin + '/Proyecto_Express_S1_SalamancaDante-SaavedraJuan-frontend' + meResult.redirect; return; };
    
    if (meResult.ok) {
        const data = meResult.document;
        if (data.role === 'user') { window.location.href = window.location.origin + '/Proyecto_Express_S1_SalamancaDante-SaavedraJuan-frontend' + data.redirect.user; return; };

        avatar_image.style.backgroundImage = `url("${data.avatar_url}")`;
        profile_username.innerText = `@${data.username}`;
    };

    sidebar_logout.addEventListener('click', async () => {
        const logOutResponse = await fetch('https://proyecto-express-s1-salamancadante.onrender.com/users/logout', { credentials: 'include' });
        const logOutResult = await logOutResponse.json();
        if (logOutResult.redirect) window.location.href = window.location.origin + logOutResult.redirect;
    });
});