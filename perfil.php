<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEDM - Mi Perfil</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body class="inner-page">

    <!-- SECCIÓN 1: PERFIL Y MATERIAS (Visible por defecto) -->
    <div id="vista-perfil-principal">
        <main class="main-content" style="padding-bottom: 20px;">
            
            <!-- Encabezado del Perfil -->
            <header class="profile-header">
                <div class="profile-banner" id="userBanner">
                    <label for="bannerImageInput" class="edit-btn" title="Cambiar portada">
                        <i class="fa-solid fa-camera"></i>
                    </label>
                    <input type="file" id="bannerImageInput" accept="image/*" style="display: none;">
                </div>
                
                <div class="profile-info-wrapper">
                    <div class="profile-avatar-container">
                        <img class="profile-pic-img" src="https://via.placeholder.com/100" alt="Foto">
                        <label for="profileImageInput" class="edit-avatar-btn">
                            <i class="fa-solid fa-camera"></i>
                        </label>
                        <input type="file" id="profileImageInput" accept="image/*" style="display: none;">
                    </div>
                    
                    <div class="profile-text">
                        <h2>Lucía Fernández</h2>
                        <p>Legajo: 12345/6<br>Diseño Multimedial</p>
                    </div>

                    <a href="login.php" class="logout-btn" title="Cerrar sesión">
                        <i class="fa-solid fa-right-from-bracket"></i>
                    </a>
                </div>
            </header>

            <!-- Filtros de Materias integrados al perfil -->
            <div class="search-bar-rounded" style="margin-top: 24px; margin-bottom: 24px;">
                <h3 style="color: white; font-size: 0.9rem; margin-bottom: 8px;">Mis Materias</h3>
                <div class="filters-grid">
                    <div class="custom-select-wrapper">
                        <select class="custom-select" id="yearSelector">
                            <option value="todos">Todos los años</option>
                            <option value="Año 1">1er Año</option>
                            <option value="Año 2">2do Año</option>
                            <option value="Año 3">3er Año</option>
                            <option value="Año 4" selected>4to Año</option>
                            <option value="Año 5">5to Año</option>
                        </select>
                    </div>
                    <div class="custom-select-wrapper">
                        <select class="custom-select" id="termSelector">
                            <option value="todos">Todo el año</option>
                            <option value="1er cuatrimestre">1er cuatrimestre</option>
                            <option value="2do cuatrimestre" selected>2do cuatrimestre</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Grilla de Materias -->
            <div class="grid-container" id="materiasGrid"></div>
        </main>
    </div>

    <!-- SECCIÓN 2: TRABAJOS PRÁCTICOS (Oculta hasta hacer clic en una materia) -->
    <div id="vista-trabajos" style="display: none;">
        <main class="main-content">
            <button class="back-btn" onclick="cerrarMateria()"><i class="fa-solid fa-arrow-left"></i> Volver a Mis Materias</button>
            
            <div class="grid-container">
                <article class="community-card" style="grid-column: span 4; background-color: var(--bg-white);">
                    <div class="assignment-header">
                        <h4 id="tpTitle">TP1 - Manual de Marca</h4>
                        <p class="tp-desc" style="color: var(--text-muted); font-size: 0.8rem;">Diseño completo de identidad visual.</p>
                    </div>
                    <div class="upload-zone">
                        <i class="fa-solid fa-cloud-arrow-up"></i>
                        <p>Hacé clic o arrastrá tu archivo</p>
                        <input type="file" class="file-upload-input" name="archivo_tp">
                    </div>
                    <div class="card-footer-status pending">Pendiente de entrega</div>
                </article>
            </div>
        </main>
    </div>

    <!-- Barra de navegación inferior -->
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