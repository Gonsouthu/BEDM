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

            const nickname = document.getElementById('nickname');
            const errorText = document.getElementById('errorText');

            if (nickname && !/^[a-z0-9._]{3,20}$/.test(nickname.value.trim().toLowerCase())) {
                errorText.textContent = 'El nickname debe tener 3 a 20 caracteres: letras, números, punto o guion bajo.';
                errorMessage.classList.add('show');
                return;
            }
            errorText.textContent = 'Las contraseñas no coinciden.';
            
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
        
        // Limpia el error si el usuario corrige el nickname
        const nickname = document.getElementById('nickname');
        if (nickname) {
            nickname.addEventListener('input', () => {
                errorMessage.classList.remove('show');
            });
        }
    }
});