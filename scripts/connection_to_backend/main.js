document.addEventListener('DOMContentLoaded', async () => {
    const invisible_elements = document.querySelectorAll(':not(.visible)');
    const loader = document.querySelector('.loader-background');
    const sidebar_logout = document.getElementById('sidebar-logout');
    const avatar_image = document.getElementById('avatar-image');
    const profile_username = document.getElementById('profile-username');
    const sidebar_content_genres = document.querySelector('.sidebar-content-genres');

    const API = 'https://proyecto-express-s1-salamancadante.onrender.com';
    const ROOT = '/Proyecto_Express_S1_SalamancaDante-SaavedraJuan-frontend';

    const meResponse = await fetch(`${API}/users/me`, { credentials: 'include' });
    const meResult = await meResponse.json();

    if (meResponse.status === 401) { window.location.href = window.location.origin + ROOT + meResult.redirect; return; };

    if (meResult.ok) {
        const data = meResult.document;
        if (data.role === 'admin') { window.location.href = window.location.origin + ROOT + meResult.redirect; return; };

        avatar_image.style.backgroundImage = `url("${data.avatar_url}")`;
        profile_username.innerText = `@${data.username}`;
        document.querySelector('body').style.overflowY = 'auto';

        invisible_elements.forEach(element => {
            element.style.visibility = 'initial';
        });

        loader.style.display = 'none';

        const genresListResponse = await fetch(`${API}/genres`);

        if (genresListResponse.ok) {
            const genresListResult = await genresListResponse.json();

            genresListResult.documents.forEach(genre => {
                sidebar_content_genres.innerHTML += `
                    <a class="sidebar-item" genre-id="${genre.code}">
                        <div class="sidebar-icon sidebar-icon${genre.code}"></div>
                        <span class="sidebar-label">${genre.name}</span>
                    </a>
                `;

                const genreIconContainer = document.querySelector(`.sidebar-icon${genre.code}`);
                genreIconContainer.style.backgroundImage = `url("${genre.icon}")`;
            });
        };
    };

    sidebar_logout.addEventListener('click', async () => {
        const logOutResponse = await fetch(`${API}/users/logout`, { credentials: 'include' });
        const logOutResult = await logOutResponse.json();
        if (logOutResult.redirect) window.location.href = window.location.origin + ROOT + logOutResult.redirect;
    });
});