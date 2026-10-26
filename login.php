<?php
session_start();
// Si el usuario ya estuviera logueado, aquí lo redirigiríamos a index.php
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEDM - Iniciar Sesión</title>
    <!-- Tipografía Roboto Mono -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
    <!-- Íconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Estilos exclusivos del login -->
    <link rel="stylesheet" href="style-login.css">
</head>
<body>
    <div class="login-container">
        <div class="login-box">
            
            <div class="login-header">
                <h1>BEDM</h1>
                <p>Repositorio Curricular Situado<br>UNM</p>
            </div>

            <form id="loginForm">
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

                <div class="forgot-password">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </div>

                <button type="submit" class="login-btn">Ingresar</button>
            </form>

            <div class="login-footer">
                ¿No tenés una cuenta? <a href="register.php">Registrate acá</a>
            </div>
            
        </div>
    </div>
    <script src="script-auth.js"></script>
</body>
</html>