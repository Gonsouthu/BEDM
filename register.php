<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEDM - Crear Cuenta</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style-login.css">
</head>
<body>
    <div class="login-container">
        <div class="login-box">
            
            <div class="login-header">
                <h1>BEDM</h1>
                <p>Creá tu cuenta en el Repositorio</p>
            </div>

            <form id="registerForm">
                <!-- Mensaje de error oculto por defecto -->
                <div id="errorMessage" class="error-message">
                    <i class="fa-solid fa-circle-exclamation"></i> Las contraseñas no coinciden.
                </div>

                <div class="form-row">
                    <div class="input-group">
                        <label for="nombre">Nombre</label>
                        <div class="input-wrapper">
                            <i class="fa-regular fa-user input-icon"></i>
                            <input type="text" id="nombre" required>
                        </div>
                    </div>
                    <div class="input-group">
                        <label for="apellido">Apellido</label>
                        <div class="input-wrapper">
                            <i class="fa-regular fa-address-card input-icon"></i>
                            <input type="text" id="apellido" required>
                        </div>
                    </div>
                </div>

                <div class="input-group">
                    <label for="email">Correo electrónico</label>
                    <div class="input-wrapper">
                        <i class="fa-regular fa-envelope input-icon"></i>
                        <input type="email" id="email" placeholder="Alumno@gmail.com" required>
                    </div>
                </div>

                <div class="input-group">
                    <label for="password">Contraseña</label>
                    <div class="input-wrapper">
                        <i class="fa-solid fa-lock input-icon"></i>
                        <input type="password" id="password" placeholder="••••••••" required>
                    </div>
                </div>

                <div class="input-group" style="margin-bottom: 25px;">
                    <label for="confirmPassword">Confirmar Contraseña</label>
                    <div class="input-wrapper">
                        <i class="fa-solid fa-lock input-icon"></i>
                        <input type="password" id="confirmPassword" placeholder="••••••••" required>
                    </div>
                </div>

                <button type="submit" class="login-btn">Crear cuenta</button>
            </form>

            <div class="login-footer">
                ¿Ya tenés cuenta? <a href="login.php">Ingresá acá</a>
            </div>
            
        </div>
    </div>
    <script src="script-auth.js"></script>
</body>
</html>