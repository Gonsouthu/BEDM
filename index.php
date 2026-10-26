<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEDM - Inicio</title>
    <!-- Tipografía Roboto Mono -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
    <!-- Íconos FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Pantalla de inicio (Hero) -->
    <header class="hero" id="heroSection">
        <div class="hero-content">
            <h1>BEDM</h1>
            <p>Ayuda y descubre a los demás</p>
        </div>
    </header>

    <!-- Cuerpo principal con trabajos random -->
    <main class="main-content">
        <div class="grid-container" id="communityGrid">
            <!-- JavaScript inyectará las tarjetas aquí -->
        </div>
    </main>

    <!-- Barra de navegación inferior -->
    <nav class="bottom-nav hidden" id="bottomNav">
        <a href="index.php" class="nav-item active" aria-label="Inicio">
            <i class="fas fa-home"></i>
        </a>
        <a href="buscar.php" class="nav-item" aria-label="Buscar">
            <i class="fas fa-search"></i>
        </a>
        <a href="perfil.php" class="nav-item" aria-label="Usuario">
            <i class="fas fa-user"></i>
        </a>
    </nav>

    <script src="script.js"></script>
</body>
</html>