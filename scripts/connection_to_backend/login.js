document.addEventListener('DOMContentLoaded', async () => {
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    const signinBtn = document.getElementById('signinBtn');
    const API = 'https://proyecto-express-s1-salamancadante.onrender.com';
    const ROOT = '/Proyecto_Express_S1_SalamancaDante-SaavedraJuan-frontend';

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';

        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    };

    function showSuccess(message) {
        successMessage.textContent = message;
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    };

    function waitBtn() {
        signinBtn.classList.add('loading');
        signinBtn.disabled = true;
        signinBtn.textContent = 'Signing In...';
    };

    function unwaitBtn() {
        signinBtn.classList.remove('loading');
        signinBtn.disabled = false;
        signinBtn.textContent = 'Sign In';
    };

    const meResponse = await fetch(`${API}/users/me`, { credentials: 'include' });
    const meResult = await meResponse.json();

    if (meResponse.status === 200) { window.location.href = window.location.origin + ROOT + meResult.redirect; return; };

    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        waitBtn();

        try {
            const body = {};

            const email = e.target.children[2].children.username.value;
            const password = e.target.children[3].children.password.value;

            if (email.trim() !== '') body.email = email;
            if (password.trim() !== '') body.password = password;

            const response = await fetch(`${API}/users/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
                credentials: 'include'
            });

            const result = await response.json();

            if (!result.ok) { showError(result.error); return; };

            if (result.redirect) {
                showSuccess(result.message);

                setTimeout(() => {
                    window.location.href = window.location.origin + ROOT + result.redirect;
                }, 3000);
            };
        } catch (err) {
            showError(err?.message ?? 'Network error');
        } finally {
            unwaitBtn();
        };
    });
});