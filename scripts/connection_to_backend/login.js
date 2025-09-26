const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');
const signinBtn = document.getElementById('signinBtn');

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

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    waitBtn();

    const body = {};

    const email = e.target.children[2].children.username.value;
    const password = e.target.children[3].children.password.value;

    if (email.trim() !== '') body.email = email;
    if (password.trim() !== '') body.password = password;

    const response = await fetch('https://proyecto-express-s1-salamancadante.onrender.com/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    const result = await response.json();

    if (!result.ok) { showError(result.error); return unwaitBtn(); };

    if (result.redirect) {
        unwaitBtn();
        showSuccess(result.message);

        setTimeout(() => {
            window.location.href = window.location.origin + result.redirect.user;
        }, 3000);
    };
});