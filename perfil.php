<?php
session_start();

// ── Modo de la página ───────────────────────────────────────────
$miNick = $_SESSION['nickname'] ?? 'lucia.fernandez';   // TODO: viene del login real
$nickPedido = isset($_GET['u']) ? strtolower(trim($_GET['u'], " \t\n\r@")) : null;

if ($nickPedido !== null && !preg_match('/^[a-z0-9._]{3,20}$/', $nickPedido)) {
    http_response_code(404);
    exit('Perfil no encontrado');
}
$esPropio = ($nickPedido === null || $nickPedido === $miNick);
$nick = $esPropio ? $miNick : $nickPedido;

// TODO: reemplazar por una consulta PDO:
//   SELECT nombre, apellido, legajo, avatar_url, banner_url FROM usuarios WHERE nickname = :nick
//   (si no hay fila: http_response_code(404); exit;)
function obtenerPerfil(string $nick): array {
    return [
        'nombre'  => 'Lucía Fernández',
        'legajo'  => '12345/6',
        'carrera' => 'Diseño Multimedial',
        'avatar'  => 'https://placehold.co/100',
    ];
}
$perfil = obtenerPerfil($nick);
$h = fn($s) => htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BEDM - <?= $esPropio ? 'Mi Perfil' : '@' . $h($nick) ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body class="inner-page" data-modo="<?= $esPropio ? 'propio' : 'publico' ?>" data-nick="<?= $h($nick) ?>">

    <!-- SECCIÓN 1: PERFIL -->
    <div id="vista-perfil-principal">
        <main class="main-content">
            <div class="grid-container">

                <header class="profile-header col-4">
                    <div class="profile-banner" id="userBanner">
                        <?php if ($esPropio): ?>
                        <label for="bannerImageInput" class="edit-btn" title="Cambiar portada">
                            <i class="fa-solid fa-camera"></i>
                        </label>
                        <input type="file" id="bannerImageInput" accept="image/*" style="display: none;">
                        <?php endif; ?>
                    </div>

                    <div class="profile-info-grid">
                        <div class="profile-avatar-col">
                            <img class="profile-pic-img" src="<?= $h($perfil['avatar']) ?>" alt="Foto">
                        </div>

                        <div class="profile-text-col">
                            <h2><?= $h($perfil['nombre']) ?></h2>
                            <!-- NUEVO: nickname -->
                            <p class="profile-nick">
                                <span id="nickText">@<?= $h($nick) ?></span>
                                <?php if ($esPropio): ?>
                                <button id="nickEditBtn" class="nick-edit-btn" title="Cambiar nickname"><i class="fa-solid fa-pen"></i></button>
                                <?php endif; ?>
                            </p>
                            <p>Legajo: <?= $h($perfil['legajo']) ?><br><?= $h($perfil['carrera']) ?></p>
                        </div>

                        <?php if ($esPropio): ?>
                        <div class="logout-col">
                            <button id="logoutTrigger" class="logout-action-btn">Cerrar sesión</button>
                        </div>
                        <?php endif; ?>
                    </div>
                </header>

                <?php if ($esPropio): ?>

                    <a href="crear.php" class="btn-add-job col-4">Añadir trabajo</a>

                    <div class="search-bar-rounded col-4">
                        <h3 class="filter-title">Mis Materias</h3>
                        <div class="filters-grid">
                            <div class="custom-select-wrapper select-white-blue">
                                <select class="custom-select" id="yearSelector">
                                    <option value="todos" selected>Todos los años</option>
                                    <option value="Año 1">1er Año</option>
                                    <option value="Año 2">2do Año</option>
                                    <option value="Año 3">3er Año</option>
                                    <option value="Año 4">4to Año</option>
                                    <option value="Año 5">5to Año</option>
                                </select>
                            </div>
                            <div class="custom-select-wrapper select-white-blue">
                                <select class="custom-select" id="termSelector">
                                    <option value="todos" selected>Todo el año</option>
                                    <option value="1er cuatrimestre">1er cuatrimestre</option>
                                    <option value="2do cuatrimestre">2do cuatrimestre</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="grid-container grid-flush col-4" id="materiasGrid"></div>

                <?php else: ?>

                    <!-- Perfil público: trabajos publicados del alumno -->
                    <div class="section-title col-4">
                        <h3>Trabajos de @<?= $h($nick) ?></h3>
                    </div>
                    <div class="grid-container grid-flush col-4" id="trabajosUsuarioGrid"></div>

                <?php endif; ?>

            </div>
        </main>
    </div>

    <?php if ($esPropio): ?>
    <!-- SECCIÓN 2: SUBIR TRABAJO PRÁCTICO -->
    <div id="vista-trabajos" style="display: none;">
        <main class="main-content">
            <!-- CORREGIDO: antes llamaba a cerrarMateria() que no existía -->
            <button class="back-btn" onclick="cerrarMateriaPerfil()"><i class="fa-solid fa-arrow-left"></i> Volver a Mis Materias</button>

            <div class="grid-container">
                <article class="community-card card-white col-4">
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

    <!-- Modal: cerrar sesión -->
    <div id="logoutModal" class="modal-overlay" style="display: none;">
        <div class="modal-box">
            <p>¿Estás seguro que deseas cerrar la sesión?</p>
            <div class="modal-actions">
                <button id="cancelLogout" class="modal-btn cancel">Cancelar</button>
                <a href="login.php" class="modal-btn confirm">Confirmar</a>
            </div>
        </div>
    </div>

    <!-- NUEVO Modal: editar nickname -->
    <div id="nickModal" class="modal-overlay" style="display: none;">
        <div class="modal-box">
            <p>Elegí tu nickname</p>
            <div class="search-input-wrapper">
                <i class="fa-solid fa-at search-icon"></i>
                <input type="text" id="nickInput" class="search-input" maxlength="20" placeholder="tu.nickname" autocomplete="off">
            </div>
            <div id="nickError" class="field-error"></div>
            <div class="modal-actions">
                <button id="nickCancel" class="modal-btn cancel">Cancelar</button>
                <button id="nickSave" class="modal-btn confirm">Guardar</button>
            </div>
        </div>
    </div>
    <?php endif; ?>

    <nav class="bottom-nav" id="bottomNav">
        <a href="index.php" class="nav-item" aria-label="Inicio"><i class="fas fa-home"></i></a>
        <a href="buscar.php" class="nav-item" aria-label="Buscar"><i class="fas fa-search"></i></a>
        <a href="perfil.php" class="nav-item<?= $esPropio ? ' active' : '' ?>" aria-label="Usuario"><i class="fas fa-user"></i></a>
    </nav>

    <script src="script.js"></script>
</body>
</html>