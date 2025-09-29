document.addEventListener('DOMContentLoaded', async () => {
    const invisible_elements = document.querySelectorAll(':not(.visible)');
    const loader = document.querySelector('.loader-background');
    const sidebar_logout = document.getElementById('sidebar-logout');
    const avatar_image = document.getElementById('avatar-image');
    const profile_username = document.getElementById('profile-username');
    const sidebar_content_genres = document.querySelector('.sidebar-content-genres');
    const movies_grid = document.querySelector('.movies-grid');

    const API = 'https://proyecto-express-s1-salamancadante.onrender.com';
    const ROOT = '/Proyecto_Express_S1_SalamancaDante-SaavedraJuan-frontend';

    const meResponse = await fetch(`${API}/users/me`, { credentials: 'include' });
    const meResult = await meResponse.json();

    if (meResponse.status === 401) { window.location.href = window.location.origin + ROOT + meResult.redirect; return; };

    if (meResult.ok) {
        const data = meResult.document;
        if (data.role === 'user') { window.location.href = window.location.origin + ROOT + meResult.redirect; return; };

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
                    <a class="sidebar-item" style="visibility: initial;" genre-id="${genre.code}">
                        <div class="sidebar-icon sidebar-icon${genre.code}" style="visibility: initial;"></div>
                        <span class="sidebar-label" style="visibility: initial;">${genre.name}</span>
                    </a>
                `;

                const genreIconContainer = document.querySelector(`.sidebar-icon${genre.code}`);
                genreIconContainer.style.backgroundImage = `url("${genre.icon}")`;
            });
        };

        const catalogFilterResponse = await fetch(`${API}/catalog?type=movie&ordering=ranking`);

        if (catalogFilterResponse.ok) {
            const catalogFilterResult = await catalogFilterResponse.json();

            catalogFilterResult.documents.forEach(title => {
                movies_grid.innerHTML += `
                    <div class="movie-card" style="visibility: initial;">
                        <div class="movie-poster movie-poster${title.code}" style="visibility: initial;">
                            <div class="movie-year-label" style="visibility: initial;">${title.release_date.getFullYear()}</div>
                        </div>
                        <div class="movie-info" style="visibility: initial;">
                            <div class="movie-title" style="visibility: initial;">${title.title}</div>
                        </div>
                    </div>
                `;

                const moviePosterContainer = document.querySelector(`.movie-poster${title.code}`);
                moviePosterContainer.style.backgroundImage = `url("${title.poster_url}")`;
            });
        };
    };

    sidebar_logout.addEventListener('click', async () => {
        const logOutResponse = await fetch(`${API}/users/logout`, { credentials: 'include' });
        const logOutResult = await logOutResponse.json();
        if (logOutResult.redirect) window.location.href = window.location.origin + ROOT + logOutResult.redirect;
    });
});