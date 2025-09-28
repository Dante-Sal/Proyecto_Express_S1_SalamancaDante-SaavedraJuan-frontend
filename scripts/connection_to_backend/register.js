document.addEventListener('DOMContentLoaded', async () => {
    const invisible_elements = document.querySelectorAll(':not(.visible)');
    const loader = document.querySelector('.loader-background');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    const registerBtn = document.getElementById('registerBtn');
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
        registerBtn.classList.add('loading');
        registerBtn.disabled = true;
        registerBtn.textContent = 'Creating Account...';
    };

    function unwaitBtn() {
        registerBtn.classList.remove('loading');
        registerBtn.disabled = false;
        registerBtn.textContent = 'Create Account';
    };

    const meResponse = await fetch(`${API}/users/me`, { credentials: 'include' });
    const meResult = await meResponse.json();

    if (meResponse.status === 200) { window.location.href = window.location.origin + ROOT + meResult.redirect; return; }
    else {
        document.querySelector('body').style.overflowY = 'auto';

        invisible_elements.forEach(element => {
            element.style.visibility = 'initial';
        });

        loader.style.display = 'none';
    };

    document.getElementById('registerForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        waitBtn();

        const body = {};

        const firstName = e.target.children[2].children[0].children.firstName.value;
        const secondName = e.target.children[2].children[1].children.secondName.value;
        const firstSurname = e.target.children[3].children[0].children.firstSurname.value;
        const secondSurname = e.target.children[3].children[1].children.secondSurname.value;
        const email = e.target.children[4].children[0].children.email.value;
        const username = e.target.children[4].children[1].children.username.value;
        const password = e.target.children[5].children[0].children.password.value;
        const avatarUrl = e.target.children[6].children.avatarUrl.value

        if (firstName.trim() !== '') body.first_name = firstName;
        if (secondName.trim() !== '') body.second_name = secondName;
        if (firstSurname.trim() !== '') body.first_surname = firstSurname;
        if (secondSurname.trim() !== '') body.second_surname = secondSurname;
        if (email.trim() !== '') body.email = email;
        if (username.trim() !== '') body.username = username;
        if (password.trim() !== '') body.password = password;
        body.role = e.target.children[5].children[1].children.role.value;
        if (avatarUrl.trim() !== '') body.avatar_url = avatarUrl;

        const registerResponse = await fetch(`${API}/users/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        const registerResult = await registerResponse.json();

        if (!registerResult.ok) { showError(registerResult.error); return unwaitBtn(); };

        if (registerResult.redirect) {
            unwaitBtn();
            showSuccess(registerResult.message);

            setTimeout(() => {
                window.location.href = window.location.origin + ROOT + registerResult.redirect;
            }, 3000);
        };
    });
});