document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DE LOGIN ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simula inicio de sesión exitoso redirigiendo a la app
            window.location.href = 'index.php'; 
        });
    }

    // --- LÓGICA DE REGISTRO ---
    const registerForm = document.getElementById('registerForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const errorMessage = document.getElementById('errorMessage');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Valida que las contraseñas coincidan
            if (password.value !== confirmPassword.value) {
                errorMessage.classList.add('show');
                password.style.borderColor = 'var(--error-red)';
                confirmPassword.style.borderColor = 'var(--error-red)';
            } else {
                errorMessage.classList.remove('show');
                // Simula registro exitoso redirigiendo a la app
                window.location.href = 'index.php'; 
            }
        });

        // Limpia el error apenas el usuario vuelve a escribir
        [password, confirmPassword].forEach(input => {
            input.addEventListener('input', () => {
                errorMessage.classList.remove('show');
                password.style.borderColor = 'var(--card-border)';
                confirmPassword.style.borderColor = 'var(--card-border)';
            });
        });
    }
});