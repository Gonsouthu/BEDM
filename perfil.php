<?php
// Aquí validaremos la sesión del usuario y cargaremos sus datos desde la BD
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEDM - Mi Perfil</title>
    <!-- Tipografía Roboto Mono -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
    <!-- Íconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Hoja de estilos -->
    <link rel="stylesheet" href="styles.css">
</head>
<body class="inner-page">

    <!-- Cuerpo principal de la página de perfil -->
    <main class="main-content">
        
        <!-- Encabezado del Perfil -->
        <header class="profile-header">
            <!-- Portada (Banner) con gradiente azul por defecto -->
            <div class="profile-banner" id="userBanner">
                <label for="bannerImageInput" class="edit-btn" title="Cambiar portada">
                    <i class="fa-solid fa-camera"></i>
                </label>
                <input type="file" id="bannerImageInput" accept="image/*" style="display: none;">
            </div>
            
            <!-- Contenedor de Info y Foto -->
            <div class="profile-info-wrapper">
                <div class="profile-avatar-container">
                    <img class="profile-pic-img" src="https://via.placeholder.com/100" alt="Foto de Perfil">
                </div>
                
                <div class="profile-text">
                    <h2>Pepito Sanchez</h2>
                    <p>Legajo: xxxxx/x<br>Diseño Multimedial</p>
                </div>

                <!-- Opciones (3 Puntos) -->
                <div class="profile-options">
                    <button id="profileMenuBtn" class="icon-btn-dots">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <!-- Menú desplegable estrictamente azul y gris -->
                    <div id="profileDropdown" class="dropdown-menu">
                        <label for="profileImageInput" class="dropdown-action">
                            <i class="fa-regular fa-image"></i> Cambiar foto
                        </label>
                        <input type="file" id="profileImageInput" accept="image/*" style="display: none;">
                        
                        <div class="dropdown-divider"></div>
                        
                        <a href="login.php" class="dropdown-action logout-action">
                            <i class="fa-solid fa-right-from-bracket"></i> Cerrar sesión
                        </a>
                    </div>
                </div>
            </div>
        </header>

        <!-- Título de sección -->
        <div class="section-title">
            <h3>Proyectos publicados</h3>
        </div>

        <!-- Retícula de proyectos (4 columnas) -->
        <div class="grid-container">
            
            <!-- Tarjeta de Proyecto 1 -->
            <article class="project-card">
                <div class="project-cover">
                    <!-- Ícono representativo o futura imagen -->
                    <i class="fa-solid fa-layer-group"></i>
                </div>
                <div class="project-data">
                    <h4>Identidad Visual - EcoUNM</h4>
                    <p>Taller de Diseño II</p>
                </div>
            </article>

            <!-- Tarjeta de Proyecto 2 -->
            <article class="project-card">
                <div class="project-cover">
                    <i class="fa-solid fa-code"></i>
                </div>
                <div class="project-data">
                    <h4>Sistema Interactivo UI/UX</h4>
                    <p>Tecnología IV</p>
                </div>
            </article>

        </div>
    </main>

    <!-- Barra de navegación inferior (Activo el ícono de Usuario) -->
    <nav class="bottom-nav" id="bottomNav">
        <a href="index.php" class="nav-item" aria-label="Inicio">
            <i class="fas fa-home"></i>
        </a>
        <a href="buscar.php" class="nav-item" aria-label="Buscar">
            <i class="fas fa-search"></i>
        </a>
        <a href="perfil.php" class="nav-item active" aria-label="Usuario">
            <i class="fas fa-user"></i>
        </a>
    </nav>

    <script src="script.js"></script>
</body>
</html>