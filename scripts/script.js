// Efectos interactivos
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-register-container, .btn-signin-container');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px)';
            this.style.filter = 'brightness(1.1) drop-shadow(0 10px 20px rgba(168, 85, 247, 0.3))';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.filter = 'brightness(1)';
        });

        button.addEventListener('click', function (e) {
            // Efecto de click
            this.style.transform = 'translateY(1px)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 100);
        });
    });

    document.querySelector('.register').addEventListener('click', () => {
        window.location.href = window.location.origin + '/html/register.html'
    });

    document.querySelector('.signin').addEventListener('click', () => {
        window.location.href = window.location.origin + '/html/login.html'
    });
});