        // Funciones para manejar los clicks de los botones
        function handleRegisterClick() {
            console.log('Register button clicked');
            // Aquí puedes añadir la funcionalidad de registro
        }
        
        function handleSignInClick() {
            console.log('Sign in button clicked');
            // Aquí puedes añadir la funcionalidad de inicio de sesión
        }
        
        // Mostrar texto fallback si la imagen del logo principal no se carga
        document.addEventListener('DOMContentLoaded', function() {
            const logoImg = document.querySelector('.brand-logo img');
            const fallbackText = document.querySelector('.fallback-text');
            
            logoImg.addEventListener('error', function() {
                this.style.display = 'none';
                fallbackText.style.display = 'block';
            });
        });
        
        // Efectos interactivos
        document.addEventListener('DOMContentLoaded', function() {
            const buttons = document.querySelectorAll('.btn-register-container, .btn-signin-container');
            
            buttons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-3px)';
                    this.style.filter = 'brightness(1.1) drop-shadow(0 10px 20px rgba(168, 85, 247, 0.3))';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.filter = 'brightness(1)';
                });
                
                button.addEventListener('click', function(e) {
                    // Efecto de click
                    this.style.transform = 'translateY(1px)';
                    setTimeout(() => {
                        this.style.transform = 'translateY(-2px)';
                    }, 100);
                });
            });
        });