<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEDM - Crear / Ver Trabajo</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body class="inner-page">

    <main class="main-content" style="padding-bottom: 40px;">
        <button class="back-btn" onclick="window.history.back()">
            <i class="fa-solid fa-arrow-left"></i> Volver
        </button>
        
        <div class="grid-container">
            
            <!-- 1. Tarjeta del Alumno -->
            <div class="create-user-card" style="grid-column: span 4;">
                <img class="create-avatar" src="https://via.placeholder.com/100" alt="Foto">
                <div class="create-user-info">
                    <h2>Lucía Fernández</h2>
                    <p>Legajo: 12345/6</p>
                </div>
                <div class="create-likes-counter">
                    <i class="fa-solid fa-thumbs-up"></i>
                    <span>124</span>
                </div>
            </div>

            <!-- 2. Caja de Descripción -->
            <div class="create-description-box" style="grid-column: span 4;">
                <textarea placeholder="Añade una breve descripción del proyecto..." rows="3"></textarea>
            </div>

            <!-- 3. Envoltorio Azul Principal (URL, PDF y Notas) -->
            <div class="post-evaluation-box" style="grid-column: span 4;">
                <div class="grid-container" style="padding: 0;">
                    
                    <!-- URL del PDF -->
                    <div class="search-input-wrapper" style="grid-column: span 4; margin-bottom: 0;">
                        <i class="fa-solid fa-link search-icon"></i>
                        <input type="url" id="pdfUrlInput" class="search-input" placeholder="Pega aquí la URL del archivo PDF">
                    </div>

                    <!-- Visualizador de PDF convertido a PNGs (Oculto hasta que se cargue JS) -->
                    <div class="create-pdf-viewer" id="pdfViewer" style="grid-column: span 4;">
                        <!-- El script inyectará las etiquetas <img> aquí -->
                    </div>

                    <!-- Box: Nota Final (Ocupa 2 columnas) -->
                    <div class="create-grade-box" style="grid-column: span 2;">
                        <div class="grade-text-block">
                            <div class="grade-value-row">
                                <input type="text" maxlength="2" value="08" class="grade-input"><span class="grade-total">/10</span>
                            </div>
                            <div class="grade-label">NOTA FINAL</div>
                        </div>
                    </div>

                    <!-- Box: Pulgar Arriba (Ocupa 1 columna) -->
                    <button class="create-action-btn thumb-up" style="grid-column: span 1;">
                        <i class="fa-solid fa-thumbs-up"></i>
                    </button>

                    <!-- Box: Pulgar Abajo (Ocupa 1 columna) -->
                    <button class="create-action-btn thumb-down" style="grid-column: span 1;">
                        <i class="fa-solid fa-thumbs-down"></i>
                    </button>

                </div>
            </div>

            <!-- 4. Sección de Comentarios -->
            <div class="create-comments-section" style="grid-column: span 4;">
                <h3 class="comments-title">Comentarios</h3>
                
                <!-- Caja para publicar un comentario -->
                <div class="comment-input-row">
                    <img class="comment-avatar" src="https://via.placeholder.com/100" alt="Tu foto">
                    <div class="comment-bubble">
                        <textarea placeholder="Publicar comentario..." rows="1"></textarea>
                        <button class="send-comment-btn" title="Publicar">
                            <i class="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </main>

    <!-- Barra de navegación inferior -->
    <nav class="bottom-nav" id="bottomNav">
        <a href="index.php" class="nav-item" aria-label="Inicio">
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