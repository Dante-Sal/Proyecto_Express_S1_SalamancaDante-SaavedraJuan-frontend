document.addEventListener('DOMContentLoaded', async () => {
    const meResponse = await fetch(`${API}/users/me`, { credentials: 'include' });
    const meResult = await meResponse.json();

    if (meResponse.status === 200) { window.location.href = window.location.origin + ROOT + meResult.redirect; return; };
});