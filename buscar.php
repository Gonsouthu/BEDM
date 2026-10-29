<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEDM - Buscar</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body class="inner-page">

    <!-- SECCIÓN 1: BUSCADOR GLOBAL -->
    <div id="vista-busqueda-global">
        <main class="main-content">
            <div class="grid-container">

                <div class="search-bar-rounded col-4">

                    <!-- Texto libre. Si empieza con "@" busca usuarios por nickname -->
                    <div class="search-input-wrapper">
                        <i class="fa-solid fa-magnifying-glass search-icon"></i>
                        <input type="text" id="searchInput" class="search-input" placeholder="Materia, archivo o @usuario..." autocomplete="off">
                    </div>

                    <!-- Filtros: 4 selects, cada uno ocupa 2 de las 4 columnas -->
                    <div class="filters-grid">
                        <!-- NUEVO: ciclo lectivo (las opciones las genera el JS desde 2023 hasta el año actual) -->
                        <div class="custom-select-wrapper select-white-blue">
                            <select class="custom-select" id="cycleSelectorGlobal">
                                <option value="todos" selected>Todos los ciclos</option>
                            </select>
                        </div>

                        <div class="custom-select-wrapper select-white-blue">
                            <select class="custom-select" id="yearSelectorGlobal">
                                <option value="todos" selected>Todos los años</option>
                                <option value="Año 1">1er Año</option>
                                <option value="Año 2">2do Año</option>
                                <option value="Año 3">3er Año</option>
                                <option value="Año 4">4to Año</option>
                                <option value="Año 5">5to Año</option>
                            </select>
                        </div>

                        <div class="custom-select-wrapper select-white-blue">
                            <select class="custom-select" id="termSelectorGlobal">
                                <option value="todos" selected>Todo el año</option>
                                <option value="1er cuatrimestre">1er cuatrimestre</option>
                                <option value="2do cuatrimestre">2do cuatrimestre</option>
                            </select>
                        </div>

                        <div class="custom-select-wrapper select-white-blue">
                            <select class="custom-select" id="categorySelector">
                                <option value="todas" selected>Todas las categorías</option>
                                <option value="taller">Taller</option>
                                <option value="tecnología">Tecnología</option>
                                <option value="sistemas">Sistemas</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Resultados (materias o usuarios) -->
                <div class="grid-container grid-flush col-4" id="materiasGridGlobal"></div>

            </div>
        </main>
    </div>

    <!-- SECCIÓN 2: TRABAJOS DE LA MATERIA -->
    <div id="vista-trabajos-global" style="display: none;">
        <main class="main-content">
            <button class="back-btn" onclick="cerrarMateriaGlobal()"><i class="fa-solid fa-arrow-left"></i> Volver a búsqueda</button>
            <div class="section-title">
                <h3 id="tpTitleGlobal">Trabajos de la materia</h3>
            </div>
            <div class="grid-container" id="trabajosComunidadGrid"></div>
        </main>
    </div>

    <nav class="bottom-nav" id="bottomNav">
        <a href="index.php" class="nav-item" aria-label="Inicio"><i class="fas fa-home"></i></a>
        <a href="buscar.php" class="nav-item active" aria-label="Buscar"><i class="fas fa-search"></i></a>
        <a href="perfil.php" class="nav-item" aria-label="Usuario"><i class="fas fa-user"></i></a>
    </nav>

    <script src="script.js"></script>
</body>
</html>