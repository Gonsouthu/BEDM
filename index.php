<?php
// Aquí prepararemos la conexión a la base de datos (MySQL)
// para cargar los TPs y materias dinámicamente en el futuro.
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEDM</title>
    <!-- Tipografía Roboto Mono -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
    <!-- Íconos FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Hoja de estilos -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Pantalla de inicio (Hero) - Cubre el 100% estricto -->
    <header class="hero" id="heroSection">
        <div class="hero-content">
            <h1>BEDM</h1>
            <p>Ayuda y descubre a los demás</p>
        </div>
    </header>

    <!-- Cuerpo principal -->
    <main class="main-content">
        <div class="grid-container">
            
            <!-- TARJETAS DE COMUNIDAD / PROYECTOS -->

            <!-- Tarjeta 1 -->
            <article class="community-card">
                <!-- Nota: Se usa 'i.postimg.cc' para obtener la imagen directa del enlace aportado -->
                <div class="card-preview" style="background-image: url('https://i.postimg.cc/N9cdyw6w/image.jpg');"></div>
                <div class="card-avatar">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="card-content">
                    <h4 class="card-title">TP1 - Manual de Marca</h4>
                    <p class="card-author">Gonzalo Uthurry</p>
                </div>
            </article>

            <!-- Tarjeta 2 -->
            <article class="community-card">
                <div class="card-preview" style="background-image: url('https://i.postimg.cc/BtJh44ZM/image.jpg');"></div>
                <div class="card-avatar">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="card-content">
                    <h4 class="card-title">TP2 - Sistema de Interfaz</h4>
                    <p class="card-author">Nahuel Abate</p>
                </div>
            </article>

            <!-- Tarjeta 3 -->
            <article class="community-card">
                <div class="card-preview" style="background-image: url('https://i.postimg.cc/BtJh44ZM/image.jpg');"></div>
                <div class="card-avatar">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="card-content">
                    <h4 class="card-title">TP3 - Prototipo Final</h4>
                    <p class="card-author">Gonzalo Uthurry</p>
                </div>
            </article>

            <!-- Tarjeta 4 -->
            <article class="community-card">
                <div class="card-preview" style="background-image: url('https://i.postimg.cc/N9cdyw6w/image.jpg');"></div>
                <div class="card-avatar">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="card-content">
                    <h4 class="card-title">TP4 - Diseño Estratégico</h4>
                    <p class="card-author">Nahuel Abate</p>
                </div>
            </article>

            <!-- Tarjeta 5 -->
            <article class="community-card">
                <div class="card-preview" style="background-image: url('https://i.postimg.cc/N9cdyw6w/image.jpg');"></div>
                <div class="card-avatar">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="card-content">
                    <h4 class="card-title">TP5 - Animación 2D</h4>
                    <p class="card-author">Gonzalo Uthurry</p>
                </div>
            </article>

            <!-- Tarjeta 6 -->
            <article class="community-card">
                <div class="card-preview" style="background-image: url('https://i.postimg.cc/BtJh44ZM/image.jpg');"></div>
                <div class="card-avatar">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="card-content">
                    <h4 class="card-title">TP6 - Modelado 3D</h4>
                    <p class="card-author">Nahuel Abate</p>
                </div>
            </article>

            <!-- Tarjeta 7 -->
            <article class="community-card">
                <div class="card-preview" style="background-image: url('https://i.postimg.cc/BtJh44ZM/image.jpg');"></div>
                <div class="card-avatar">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="card-content">
                    <h4 class="card-title">TP6 - Modelado 3D</h4>
                    <p class="card-author">Gonzalo Uthurry</p>
                </div>
            </article>

            <!-- Tarjeta 8 -->
            <article class="community-card">
                <div class="card-preview" style="background-image: url('https://i.postimg.cc/N9cdyw6w/image.jpg');"></div>
                <div class="card-avatar">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="card-content">
                    <h4 class="card-title">TP6 - Modelado 3D</h4>
                    <p class="card-author">Nahuel Abate</p>
                </div>
            </article>

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

    <!-- Script de interacciones -->
    <script src="script.js"></script>
</body>
</html>