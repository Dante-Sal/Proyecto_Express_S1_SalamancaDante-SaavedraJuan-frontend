const loginForm = document.getElementById('loginForm');
        const signinBtn = document.getElementById('signinBtn');
        const errorMessage = document.getElementById('errorMessage');
        const successMessage = document.getElementById('successMessage');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        // Password strength validation
        function validatePasswordStrength(password) {
            const hasUppercase = /[A-Z]/.test(password);
            const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
            return hasUppercase && hasSymbol;
        }

        // Form validation
        function validateForm() {
            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (!username) {
                showError('Please enter your username or email');
                usernameInput.focus();
                return false;
            }

            if (!password) {
                showError('Please enter your password');
                passwordInput.focus();
                return false;
            }

            if (password.length < 8) {
                showError('Password must be at least 8 characters long');
                passwordInput.focus();
                return false;
            }

            if (!validatePasswordStrength(password)) {
                showError('Password must contain at least one uppercase letter and one symbol');
                passwordInput.focus();
                return false;
            }

            return true;
        }

        // Show error message
        function showError(message) {
            errorMessage.textContent = message;
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
            
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 5000);
        }

        // Show success message
        function showSuccess(message) {
            successMessage.textContent = message;
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        }

        // Handle login form submission
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            if (!validateForm()) {
                return;
            }

            // Show loading state
            signinBtn.classList.add('loading');
            signinBtn.textContent = 'Signing In...';
            
            const formData = new FormData(loginForm);
            const loginData = {
                username: formData.get('username'),
                password: formData.get('password'),
                rememberMe: formData.get('rememberMe') === 'on'
            };

            try {
                // Simular llamada a API (reemplazar con tu endpoint real)
                await simulateLogin(loginData);
                
                showSuccess('Login successful! Redirecting...');
                
                // Redirect after successful login
                setTimeout(() => {
                    // Aquí redirigirías a la página principal
                    window.location.href = './dashboard.html'; // o la página que corresponda
                }, 2000);
                
            } catch (error) {
                showError(error.message || 'Login failed. Please try again.');
            } finally {
                // Reset button state
                signinBtn.classList.remove('loading');
                signinBtn.textContent = 'Sign In';
            }
        });

        // Simulate login API call (replace with actual API)
        async function simulateLogin(loginData) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Simulate different responses
                    if (loginData.username === 'admin' && loginData.password === 'Admin123!') {
                        resolve({ success: true, user: { username: loginData.username } });
                    } else if (loginData.username === 'demo' && loginData.password === 'Demo123@') {
                        resolve({ success: true, user: { username: loginData.username } });
                    } else {
                        reject(new Error('Invalid username or password'));
                    }
                }, 1500);
            });
        }

        // Handle forgot password
        function handleForgotPassword() {
            // Aquí puedes redirigir a la página de recuperación de contraseña
            console.log('Forgot password clicked');
            showError('Password recovery feature coming soon!');
        }

        // Handle sign up
        function handleSignUp() {
            // Aquí puedes redirigir a la página de registro
            console.log('Sign up clicked');
            window.location.href = './register.html'; // o volver a la página de inicio
        }

        // Real-time validation
        usernameInput.addEventListener('blur', function() {
            if (!this.value.trim()) {
                this.style.borderColor = 'rgba(239, 68, 68, 0.5)';
            } else {
                this.style.borderColor = 'rgba(170, 118, 255, 0.3)';
            }
        });

        passwordInput.addEventListener('blur', function() {
            if (!this.value.trim() || this.value.length < 8 || !validatePasswordStrength(this.value)) {
                this.style.borderColor = 'rgba(239, 68, 68, 0.5)';
            } else {
                this.style.borderColor = 'rgba(170, 118, 255, 0.3)';
            }
        });

        // Enter key handling
        document.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !signinBtn.classList.contains('loading')) {
                loginForm.dispatchEvent(new Event('submit'));
            }
        });