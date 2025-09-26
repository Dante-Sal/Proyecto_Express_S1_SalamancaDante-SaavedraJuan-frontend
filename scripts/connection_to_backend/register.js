const errorMessage = document.getElementById('errorMessage');

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
    
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
};

document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

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

    const res = await fetch('https://proyecto-express-s1-salamancadante.onrender.com/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    if (!res.ok) return showError(res.message);

    const result = await res.json();
    if (result.redirect) window.location.href = result.redirect;
});