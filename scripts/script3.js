// DOM elements
const registerForm = document.getElementById('registerForm');
const registerBtn = document.getElementById('registerBtn');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');
const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');
const emailInput = document.getElementById('email');

// Password strength calculation
function calculatePasswordStrength(password) {
    let score = 0;
    let feedback = [];

    // Length check
    if (password.length >= 8) score += 25;
    else feedback.push("at least 8 characters");

    // Uppercase check
    if (/[A-Z]/.test(password)) score += 25;
    else feedback.push("one uppercase letter");

    // Lowercase check
    if (/[a-z]/.test(password)) score += 25;
    else feedback.push("one lowercase letter");

    // Symbol check
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) score += 25;
    else feedback.push("one symbol");

    return { score, feedback };
}

// Update password strength indicator
function updatePasswordStrength() {
    const password = passwordInput.value;
    const { score, feedback } = calculatePasswordStrength(password);
    
    strengthBar.style.width = score + '%';
    
    if (score === 0) {
        strengthBar.className = 'strength-bar';
        strengthText.textContent = 'Password strength: None';
    } else if (score <= 25) {
        strengthBar.className = 'strength-bar strength-weak';
        strengthText.textContent = 'Password strength: Weak';
    } else if (score <= 50) {
        strengthBar.className = 'strength-bar strength-fair';
        strengthText.textContent = 'Password strength: Fair';
    } else if (score <= 75) {
        strengthBar.className = 'strength-bar strength-good';
        strengthText.textContent = 'Password strength: Good';
    } else {
        strengthBar.className = 'strength-bar strength-strong';
        strengthText.textContent = 'Password strength: Strong';
    }

    return score >= 75;
}

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Form validation
function validateForm() {
    const formData = new FormData(registerForm);
    const data = Object.fromEntries(formData);

    // Required fields check
    const requiredFields = ['firstName', 'firstSurname', 'secondSurname', 'email', 'password', 'role'];
    for (let field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            showError(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field`);
            document.getElementById(field).focus();
            return false;
        }
    }

    // Email validation
    if (!validateEmail(data.email)) {
        showError('Please enter a valid email address');
        emailInput.focus();
        return false;
    }

    // Password strength validation
    if (!updatePasswordStrength()) {
        showError('Password must be strong (at least 8 characters with uppercase, lowercase, and symbol)');
        passwordInput.focus();
        return false;
    }

    // Terms and conditions check
    if (!data.termsConditions) {
        showError('Please agree to the Terms and Conditions to continue');
        document.getElementById('termsConditions').focus();
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
};

// Show success message
function showSuccess(message) {
    successMessage.textContent = message;
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
    
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
}

// Handle form submission
registerForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }

    // Show loading state
    registerBtn.classList.add('loading');
    registerBtn.textContent = 'Creating Account...';
    
    const formData = new FormData(registerForm);
    const userData = Object.fromEntries(formData);

    try {
        // Simulate API call
        await simulateRegistration(userData);
        
        showSuccess('Account created successfully! Redirecting to sign in...');
        
        // Reset form
        registerForm.reset();
        updatePasswordStrength();
        
        // Redirect after successful registration
        setTimeout(() => {
            window.location.href = './login.html';
        }, 3000);
        
    } catch (error) {
        showError(error.message || 'Registration failed. Please try again.');
    } finally {
        // Reset button state
        registerBtn.classList.remove('loading');
        registerBtn.textContent = 'Create Account';
    }
});

// Simulate registration API call
async function simulateRegistration(userData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Check if email already exists (simulation)
            const existingEmails = ['admin@karenflix.com', 'test@example.com'];
            
            if (existingEmails.includes(userData.email.toLowerCase())) {
                reject(new Error('An account with this email already exists'));
                return;
            }

            // Simulate successful registration
            resolve({
                success: true,
                user: {
                    id: Date.now(),
                    email: userData.email,
                    firstName: userData.firstName,
                    role: userData.role
                }
            });
        }, 2000);
    });
}

// Password strength real-time update
passwordInput.addEventListener('input', updatePasswordStrength);

// Real-time validation for all inputs
const inputs = document.querySelectorAll('.form-control, .form-select');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.style.borderColor = 'rgba(239, 68, 68, 0.5)';
        } else if (this.type === 'email' && this.value && !validateEmail(this.value)) {
            this.style.borderColor = 'rgba(239, 68, 68, 0.5)';
        } else {
            this.style.borderColor = 'rgba(170, 118, 255, 0.3)';
        }
    });

    input.addEventListener('focus', function() {
        this.style.borderColor = '#AA76FF';
    });
});

// Handle Terms and Conditions link
function showTerms() {
    alert('Terms and Conditions:\n\n1. You must be 18+ to use this service\n2. No sharing accounts\n3. Respect content copyrights\n4. No inappropriate behavior\n5. We reserve the right to terminate accounts\n\n(This is a demo - implement proper modal/page)');
}

// Handle Privacy Policy link
function showPrivacy() {
    alert('Privacy Policy:\n\n1. We collect minimal personal data\n2. Your data is encrypted and secure\n3. We don\'t sell your information\n4. You can delete your account anytime\n5. We use cookies for better experience\n\n(This is a demo - implement proper modal/page)');
}

// Handle Sign In link
function handleSignIn() {
    window.location.href = './login.html';
}

// Avatar URL validation (optional)
const avatarInput = document.getElementById('avatarUrl');
if (avatarInput) {
    avatarInput.addEventListener('blur', function() {
        if (this.value && !isValidUrl(this.value)) {
            this.style.borderColor = 'rgba(239, 68, 68, 0.5)';
            showError('Please enter a valid URL for the avatar');
        } else {
            this.style.borderColor = 'rgba(170, 118, 255, 0.3)';
        }
    });
}

// URL validation helper
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// Character counter for names (optional feature)
function addCharacterCounter(inputId, maxLength = 50) {
    const input = document.getElementById(inputId);
    if (input) {
        const counter = document.createElement('small');
        counter.style.color = 'rgba(255, 255, 255, 0.5)';
        counter.style.fontSize = '0.75rem';
        counter.style.display = 'block';
        counter.style.marginTop = '0.25rem';
        
        input.addEventListener('input', function() {
            const remaining = maxLength - this.value.length;
            counter.textContent = `${remaining} characters remaining`;
            
            if (remaining < 10) {
                counter.style.color = '#ff6b6b';
            } else {
                counter.style.color = 'rgba(255, 255, 255, 0.5)';
            }
            
            if (this.value.length > maxLength) {
                this.value = this.value.substring(0, maxLength);
            }
        });
        
        input.parentNode.appendChild(counter);
        input.dispatchEvent(new Event('input')); // Initialize counter
    }
}

// Initialize character counters for name fields
document.addEventListener('DOMContentLoaded', function() {
    addCharacterCounter('firstName', 30);
    addCharacterCounter('secondName', 30);
    addCharacterCounter('firstSurname', 30);
    addCharacterCounter('secondSurname', 30);
});

// Enter key handling for better UX
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA' && !registerBtn.classList.contains('loading')) {
        const form = e.target.closest('form');
        if (form === registerForm) {
            e.preventDefault();
            registerForm.dispatchEvent(new Event('submit'));
        }
    }
});

// Auto-format name inputs (capitalize first letter)
const nameInputs = ['firstName', 'secondName', 'firstSurname', 'secondSurname'];
nameInputs.forEach(inputId => {
    const input = document.getElementById(inputId);
    if (input) {
        input.addEventListener('blur', function() {
            if (this.value) {
                this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1).toLowerCase();
            }
        });
    }
});

console.log('KarenFlix Registration System loaded successfully! 🎬');