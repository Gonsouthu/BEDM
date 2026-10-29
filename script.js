// ══════════════════════════════════════════════════════════════
// CONFIGURACIÓN GLOBAL
// ══════════════════════════════════════════════════════════════
const ANIO_INICIO_CARRERA = 2023;                 // año en que se inauguró la carrera
const ANIOS_CARRERA = 5;
const CICLO_ACTUAL = new Date().getFullYear();    // se actualiza solo cada año
const NICK_REGEX = /^[a-z0-9._]{3,20}$/;          // misma regla que el CHECK de la base

// Cuántos años de carrera "existen" en un ciclo lectivo:
// 2023 -> 1, 2024 -> 2, 2025 -> 3, 2026 -> 4, 2027 en adelante -> 5
const aniosDisponibles = (ciclo) => Math.max(0, Math.min(ANIOS_CARRERA, ciclo - ANIO_INICIO_CARRERA + 1));
const numeroDeAnio = (txt) => parseInt(String(txt).replace('Año ', ''), 10);
const capitalizar = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const escapeHTML = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const IMG_A = "https://i.postimg.cc/N9cdyw6w/image.jpg";
const IMG_B = "https://i.postimg.cc/BtJh44ZM/image.jpg";

// Tarjeta de trabajo reutilizable (index, buscar y perfil público)
function tarjetaTrabajo({ tp, autor, img }) {
    return `
        <article class="community-card">
            <div class="card-preview" style="background-image: url('${escapeHTML(img)}');"></div>
            <div class="card-avatar"><i class="fa-solid fa-user"></i></div>
            <div class="card-content">
                <h4 class="card-title">${escapeHTML(tp)}</h4>
                <p class="card-author">${escapeHTML(autor)}</p>
            </div>
        </article>`;
}

function tarjetaMateria(m, subtitulo) {
    return `
        <article class="subject-card" data-materia="${escapeHTML(m.nombre)}">
            <div class="subject-icon-box"><i class="fa-solid ${m.icon}"></i></div>
            <div class="subject-info">
                <h4 title="${escapeHTML(m.nombre)}">${escapeHTML(m.nombre)}</h4>
                <p>${escapeHTML(subtitulo)}</p>
            </div>
        </article>`;
}

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Barra inferior: se oculta solo durante el Hero de index.php ---
    const bottomNav = document.getElementById('bottomNav');
    const heroSection = document.getElementById('heroSection');

    if (heroSection && bottomNav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > heroSection.offsetHeight * 0.8) {
                bottomNav.classList.remove('hidden');
            } else {
                bottomNav.classList.add('hidden');
            }
        });
        window.dispatchEvent(new Event('scroll'));
    } else if (bottomNav) {
        bottomNav.classList.remove('hidden');
    }

    // --- 2. Trabajos random (index.php) ---
    const communityGrid = document.getElementById('communityGrid');
    if (communityGrid) {
        // TODO: reemplazar por fetch('api/trabajos_random.php')
        const communityData = [
            { autor: "Gonzalo Uthurry", tp: "TP1 - Manual de Marca", img: IMG_A },
            { autor: "Nahuel Abate", tp: "TP2 - Sistema de Interfaz", img: IMG_B },
            { autor: "Sofía Gómez", tp: "TP3 - Prototipo Final", img: IMG_B },
            { autor: "Lucas Silva", tp: "TP4 - Diseño Estratégico", img: IMG_A },
            { autor: "Clara Vega", tp: "TP5 - Animación 2D", img: IMG_A },
            { autor: "Marcos Díaz", tp: "TP6 - Modelado 3D", img: IMG_B }
        ];
        communityGrid.innerHTML = communityData.map(tarjetaTrabajo).join('');
    }

    // --- BASE DE MATERIAS ---
    const materiasDB = [
        // AÑO 1
        { nombre: "Taller de Diseño I", anio: "Año 1", cuatrimestre: "1er cuatrimestre", categoria: "taller", icon: "fa-pen-nib" },
        { nombre: "Tecnología I", anio: "Año 1", cuatrimestre: "1er cuatrimestre", categoria: "tecnología", icon: "fa-microchip" },
        { nombre: "Dibujo", anio: "Año 1", cuatrimestre: "1er cuatrimestre", categoria: "sistemas", icon: "fa-pencil" },
        { nombre: "Matemática", anio: "Año 1", cuatrimestre: "1er cuatrimestre", categoria: "sistemas", icon: "fa-calculator" },
        { nombre: "Física", anio: "Año 1", cuatrimestre: "1er cuatrimestre", categoria: "tecnología", icon: "fa-atom" },
        { nombre: "Taller de Diseño II", anio: "Año 1", cuatrimestre: "2do cuatrimestre", categoria: "taller", icon: "fa-pen-nib" },
        { nombre: "Tecnología II", anio: "Año 1", cuatrimestre: "2do cuatrimestre", categoria: "tecnología", icon: "fa-microchip" },
        { nombre: "Morfología", anio: "Año 1", cuatrimestre: "2do cuatrimestre", categoria: "taller", icon: "fa-shapes" },
        { nombre: "Problemas Socioeconómicos Argentinos", anio: "Año 1", cuatrimestre: "2do cuatrimestre", categoria: "sistemas", icon: "fa-users" },
        
        // AÑO 2
        { nombre: "Taller de Diseño Orientado I", anio: "Año 2", cuatrimestre: "1er cuatrimestre", categoria: "taller", icon: "fa-bullseye" },
        { nombre: "Tecnología Diseño Orientado I", anio: "Año 2", cuatrimestre: "1er cuatrimestre", categoria: "tecnología", icon: "fa-code" },
        { nombre: "Sistemas de Representación Orientado I", anio: "Año 2", cuatrimestre: "1er cuatrimestre", categoria: "sistemas", icon: "fa-compass-drafting" },
        { nombre: "Química", anio: "Año 2", cuatrimestre: "1er cuatrimestre", categoria: "tecnología", icon: "fa-flask" },
        { nombre: "Panorama Histórico y Social del Diseño", anio: "Año 2", cuatrimestre: "1er cuatrimestre", categoria: "sistemas", icon: "fa-landmark" },
        { nombre: "Taller de Diseño Orientado II", anio: "Año 2", cuatrimestre: "2do cuatrimestre", categoria: "taller", icon: "fa-bullseye" },
        { nombre: "Tecnología de Diseño Orientado II", anio: "Año 2", cuatrimestre: "2do cuatrimestre", categoria: "tecnología", icon: "fa-code" },
        { nombre: "Sistemas de Representación Orientado II", anio: "Año 2", cuatrimestre: "2do cuatrimestre", categoria: "sistemas", icon: "fa-compass-drafting" },
        { nombre: "Dibujo Asistido por PC", anio: "Año 2", cuatrimestre: "2do cuatrimestre", categoria: "sistemas", icon: "fa-desktop" },
        { nombre: "Asignatura Electiva", anio: "Año 2", cuatrimestre: "2do cuatrimestre", categoria: "taller", icon: "fa-puzzle-piece" },
        
        // AÑO 3
        { nombre: "Taller de Diseño Multimedial I", anio: "Año 3", cuatrimestre: "1er cuatrimestre", categoria: "taller", icon: "fa-layer-group" },
        { nombre: "Tecnología de Diseño Multimedial I", anio: "Año 3", cuatrimestre: "1er cuatrimestre", categoria: "tecnología", icon: "fa-code" },
        { nombre: "Sistemas de Representación para Diseño Multimedial I", anio: "Año 3", cuatrimestre: "1er cuatrimestre", categoria: "sistemas", icon: "fa-compass-drafting" },
        { nombre: "Semiótica Aplicada al Diseño I", anio: "Año 3", cuatrimestre: "1er cuatrimestre", categoria: "sistemas", icon: "fa-eye" },
        { nombre: "Asignatura Electiva", anio: "Año 3", cuatrimestre: "1er cuatrimestre", categoria: "taller", icon: "fa-puzzle-piece" },
        { nombre: "Taller de Diseño Multimedial II", anio: "Año 3", cuatrimestre: "2do cuatrimestre", categoria: "taller", icon: "fa-layer-group" },
        { nombre: "Tecnología de Diseño Multimedial II", anio: "Año 3", cuatrimestre: "2do cuatrimestre", categoria: "tecnología", icon: "fa-code" },
        { nombre: "Sistemas de Representación para Diseño Multimedial II", anio: "Año 3", cuatrimestre: "2do cuatrimestre", categoria: "sistemas", icon: "fa-compass-drafting" },
        { nombre: "Semiótica Aplicada al Diseño II", anio: "Año 3", cuatrimestre: "2do cuatrimestre", categoria: "sistemas", icon: "fa-eye" },
        { nombre: "Asignatura Electiva", anio: "Año 3", cuatrimestre: "2do cuatrimestre", categoria: "taller", icon: "fa-puzzle-piece" },
        
        // AÑO 4
        { nombre: "Taller de Diseño Multimedial III", anio: "Año 4", cuatrimestre: "1er cuatrimestre", categoria: "taller", icon: "fa-layer-group" },
        { nombre: "Tecnología de Diseño Multimedial III", anio: "Año 4", cuatrimestre: "1er cuatrimestre", categoria: "tecnología", icon: "fa-code" },
        { nombre: "Diseño Estratégico, Innovación y Emprendimiento I", anio: "Año 4", cuatrimestre: "1er cuatrimestre", categoria: "sistemas", icon: "fa-lightbulb" },
        { nombre: "Ciencia, Tecnología y Proyecto de País", anio: "Año 4", cuatrimestre: "1er cuatrimestre", categoria: "sistemas", icon: "fa-rocket" },
        { nombre: "Asig. Electiva Diseño Multimedial", anio: "Año 4", cuatrimestre: "1er cuatrimestre", categoria: "taller", icon: "fa-puzzle-piece" },
        { nombre: "Taller de Diseño Multimedial IV", anio: "Año 4", cuatrimestre: "2do cuatrimestre", categoria: "taller", icon: "fa-layer-group" },
        { nombre: "Tecnología de Diseño Multimedial IV", anio: "Año 4", cuatrimestre: "2do cuatrimestre", categoria: "tecnología", icon: "fa-code" },
        { nombre: "Diseño Estratégico e Innovación II", anio: "Año 4", cuatrimestre: "2do cuatrimestre", categoria: "sistemas", icon: "fa-lightbulb" },
        { nombre: "Innovación y Desarrollo Industrial", anio: "Año 4", cuatrimestre: "2do cuatrimestre", categoria: "sistemas", icon: "fa-industry" },
        { nombre: "Herramientas para Exposiciones", anio: "Año 4", cuatrimestre: "2do cuatrimestre", categoria: "tecnología", icon: "fa-vr-cardboard" },
        
        // AÑO 5
        { nombre: "Taller de Proyecto de Diseño Multimedial", anio: "Año 5", cuatrimestre: "1er cuatrimestre", categoria: "taller", icon: "fa-cubes" },
        { nombre: "Metodología Científica Aplicada al Diseño", anio: "Año 5", cuatrimestre: "1er cuatrimestre", categoria: "sistemas", icon: "fa-magnifying-glass" },
        { nombre: "Formulación, Evaluación de Proyectos y Financiamiento", anio: "Año 5", cuatrimestre: "1er cuatrimestre", categoria: "sistemas", icon: "fa-chart-pie" },
        { nombre: "Asig. Electiva Diseño Multimedial", anio: "Año 5", cuatrimestre: "1er cuatrimestre", categoria: "taller", icon: "fa-puzzle-piece" },
        { nombre: "Comunicación del Proyecto", anio: "Año 5", cuatrimestre: "2do cuatrimestre", categoria: "sistemas", icon: "fa-bullhorn" },
        { nombre: "Proyecto Final de Diseño Multimedial", anio: "Año 5", cuatrimestre: "2do cuatrimestre", categoria: "taller", icon: "fa-flag-checkered" },
        { nombre: "Legislación y Práctica Profesional", anio: "Año 5", cuatrimestre: "2do cuatrimestre", categoria: "sistemas", icon: "fa-scale-balanced" },
        { nombre: "Asig. Electiva Diseño Multimedial", anio: "Año 5", cuatrimestre: "2do cuatrimestre", categoria: "taller", icon: "fa-puzzle-piece" }
    ];

    // --- 3A. BUSCADOR GLOBAL (buscar.php) ---
    const gridGlobal = document.getElementById('materiasGridGlobal');
    if (gridGlobal) {
        const searchInput = document.getElementById('searchInput');
        const cycleSel = document.getElementById('cycleSelectorGlobal');
        const yearSel = document.getElementById('yearSelectorGlobal');
        const termSel = document.getElementById('termSelectorGlobal');
        const catSel = document.getElementById('categorySelector');

        // TODO: reemplazar por fetch('api/buscar_usuarios.php?q=...')
        const usuariosDB = [
            { nick: 'lucia.fernandez', nombre: 'Lucía Fernández' },
            { nick: 'gonzalo.uthurry', nombre: 'Gonzalo Uthurry' },
            { nick: 'nahuel.abate', nombre: 'Nahuel Abate' },
            { nick: 'sofia.gomez', nombre: 'Sofía Gómez' }
        ];

        // Ciclos: desde el año actual hacia atrás hasta 2023
        function poblarCiclos() {
            let html = '<option value="todos" selected>Todos los ciclos</option>';
            for (let c = CICLO_ACTUAL; c >= ANIO_INICIO_CARRERA; c--) {
                html += `<option value="${c}">Ciclo ${c}</option>`;
            }
            cycleSel.innerHTML = html;
        }

        // Máximo año de carrera que puede tener trabajos según el ciclo elegido
        const topeAnios = () => aniosDisponibles(cycleSel.value === 'todos' ? CICLO_ACTUAL : Number(cycleSel.value));

        // Bloquea los años que todavía no existían en ese ciclo
        function actualizarAnios() {
            const tope = topeAnios();
            Array.from(yearSel.options).forEach(opt => {
                if (opt.value === 'todos') return;
                const bloqueado = numeroDeAnio(opt.value) > tope;
                opt.disabled = bloqueado;
                opt.hidden = bloqueado;
            });
            if (yearSel.value !== 'todos' && numeroDeAnio(yearSel.value) > tope) yearSel.value = 'todos';
        }

        function renderUsuarios(q) {
            const res = usuariosDB.filter(u => u.nick.includes(q) || u.nombre.toLowerCase().includes(q));
            gridGlobal.innerHTML = res.length
                ? res.map(u => `
                    <a class="subject-card user-result" href="perfil.php?u=${encodeURIComponent(u.nick)}">
                        <div class="subject-icon-box"><i class="fa-solid fa-user"></i></div>
                        <div class="subject-info">
                            <h4>@${escapeHTML(u.nick)}</h4>
                            <p>${escapeHTML(u.nombre)}</p>
                        </div>
                    </a>`).join('')
                : '<p class="empty-state">No se encontraron usuarios.</p>';
        }

        function renderGlobal() {
            const texto = searchInput.value.trim().toLowerCase();
            if (texto.startsWith('@')) { renderUsuarios(texto.slice(1)); return; }

            const tope = topeAnios();
            const filtradas = materiasDB.filter(m =>
                m.nombre.toLowerCase().includes(texto) &&
                numeroDeAnio(m.anio) <= tope &&
                (yearSel.value === 'todos' || m.anio === yearSel.value) &&
                (termSel.value === 'todos' || m.cuatrimestre === termSel.value) &&
                (catSel.value === 'todas' || m.categoria === catSel.value)
            );

            gridGlobal.innerHTML = filtradas.length
                ? filtradas.map(m => tarjetaMateria(m, `${m.anio} • ${capitalizar(m.categoria)}`)).join('')
                : '<p class="empty-state">No se encontraron materias.</p>';
        }

        gridGlobal.addEventListener('click', (e) => {
            const card = e.target.closest('[data-materia]');
            if (card) abrirMateriaGlobal(card.dataset.materia, cycleSel.value);
        });

        cycleSel.addEventListener('change', () => { actualizarAnios(); renderGlobal(); });
        [searchInput].forEach(el => el.addEventListener('input', renderGlobal));
        [yearSel, termSel, catSel].forEach(el => el.addEventListener('change', renderGlobal));

        poblarCiclos();
        actualizarAnios();
        renderGlobal();
    }

    // --- 3B. MIS MATERIAS (perfil.php, modo propio) ---
    const gridPerfil = document.getElementById('materiasGrid');
    if (gridPerfil) {
        const yearSelP = document.getElementById('yearSelector');
        const termSelP = document.getElementById('termSelector');

        function renderPerfil() {
            const filtradas = materiasDB.filter(m =>
                (yearSelP.value === 'todos' || m.anio === yearSelP.value) &&
                (termSelP.value === 'todos' || m.cuatrimestre === termSelP.value)
            );
            gridPerfil.innerHTML = filtradas.length
                ? filtradas.map(m => tarjetaMateria(m, `${m.anio} • ${m.cuatrimestre}`)).join('')
                : '<p class="empty-state">No tenés materias en este filtro.</p>';
        }

        gridPerfil.addEventListener('click', (e) => {
            const card = e.target.closest('[data-materia]');
            if (card) abrirMateriaPerfil(card.dataset.materia);
        });
        yearSelP.addEventListener('change', renderPerfil);
        termSelP.addEventListener('change', renderPerfil);
        renderPerfil();
    }

    // --- 3C. PERFIL PÚBLICO (perfil.php?u=nickname) ---
    const gridUsuario = document.getElementById('trabajosUsuarioGrid');
    if (gridUsuario) {
        // TODO: reemplazar por fetch(`api/trabajos_usuario.php?u=${document.body.dataset.nick}`)
        const autor = '@' + document.body.dataset.nick;
        gridUsuario.innerHTML = [
            { tp: 'TP1 - Manual de Marca', autor, img: IMG_A },
            { tp: 'TP2 - Sistema de Interfaz', autor, img: IMG_B }
        ].map(tarjetaTrabajo).join('');
    }

    // --- 4. NICKNAME (perfil.php, modo propio) ---
    const nickEditBtn = document.getElementById('nickEditBtn');
    if (nickEditBtn) {
        const nickText = document.getElementById('nickText');
        const nickModal = document.getElementById('nickModal');
        const nickInput = document.getElementById('nickInput');
        const nickError = document.getElementById('nickError');
        const nickSave = document.getElementById('nickSave');
        const nickCancel = document.getElementById('nickCancel');

        const abrir = () => {
            nickInput.value = nickText.textContent.replace('@', '');
            nickError.classList.remove('show');
            nickModal.style.display = 'flex';
            nickInput.focus();
        };
        const cerrar = () => { nickModal.style.display = 'none'; };
        const mostrarError = (msg) => { nickError.textContent = msg; nickError.classList.add('show'); };

        // TODO backend: validar unicidad y guardar en la base.
        //   const r = await fetch('api/nickname.php', { method: 'POST',
        //       headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ nickname: nick }) });
        //   return await r.json();   // { ok: true } | { ok: false, error: 'Ese nickname ya está en uso.' }
        async function guardarNickname(nick) { return { ok: true }; }

        nickEditBtn.addEventListener('click', abrir);
        nickCancel.addEventListener('click', cerrar);
        nickModal.addEventListener('click', (e) => { if (e.target === nickModal) cerrar(); });
        nickInput.addEventListener('input', () => nickError.classList.remove('show'));

        nickSave.addEventListener('click', async () => {
            const nick = nickInput.value.trim().toLowerCase().replace(/^@/, '');
            if (!NICK_REGEX.test(nick)) {
                return mostrarError('Usá de 3 a 20 caracteres: minúsculas, números, punto o guion bajo.');
            }
            const res = await guardarNickname(nick);
            if (!res.ok) return mostrarError(res.error || 'Ese nickname ya está en uso.');
            nickText.textContent = '@' + nick;
            cerrar();
        });
    }

    // --- 5. Subida visual de archivos ---
    document.querySelectorAll('.file-upload-input').forEach(input => {
        input.addEventListener('change', function () {
            if (this.files && this.files.length > 0) {
                this.parentElement.querySelector('p').innerHTML = `Listo para subir:<br><small>${escapeHTML(this.files[0].name)}</small>`;
                const icon = this.parentElement.querySelector('i');
                icon.classList.replace('fa-cloud-arrow-up', 'fa-file-circle-check');
                icon.style.color = 'var(--blue-top)';
            }
        });
    });

    // --- 6. Modal de logout ---
    const logoutTrigger = document.getElementById('logoutTrigger');
    const logoutModal = document.getElementById('logoutModal');
    const cancelLogout = document.getElementById('cancelLogout');

    if (logoutTrigger && logoutModal && cancelLogout) {
        logoutTrigger.addEventListener('click', (e) => { e.preventDefault(); logoutModal.style.display = 'flex'; });
        cancelLogout.addEventListener('click', () => { logoutModal.style.display = 'none'; });
        logoutModal.addEventListener('click', (e) => { if (e.target === logoutModal) logoutModal.style.display = 'none'; });
    }

    // --- 7. Simulador de PDF -> PNG (crear.php) ---
    // En producción la conversión se hace en el servidor (Imagick / pdftoppm) y se guarda en trabajo_paginas.
    const pdfUrlInput = document.getElementById('pdfUrlInput');
    const pdfViewer = document.getElementById('pdfViewer');

    if (pdfUrlInput && pdfViewer) {
        pdfUrlInput.addEventListener('input', function () {
            const url = this.value.trim();
            if (url.length > 5) {
                pdfViewer.innerHTML = '<p style="color: white; text-align: center; padding: 20px; font-weight: 700;">Procesando archivo...</p>';
                pdfViewer.style.display = 'flex';
                setTimeout(() => {
                    pdfViewer.innerHTML = [1, 2, 3].map(n =>
                        `<img src="https://placehold.co/800x1130/CBD5E1/333333?text=P%C3%A1gina+${n}+PDF" alt="Página ${n}">`
                    ).join('');
                }, 1500);
            } else {
                pdfViewer.innerHTML = '';
                pdfViewer.style.display = 'none';
            }
        });
    }

    // --- 8. Nota: solo números de 0 a 10 (crear.php) ---
    const gradeInput = document.querySelector('.grade-input');
    if (gradeInput) {
        gradeInput.addEventListener('input', function () {
            this.value = this.value.replace(/\D/g, '').slice(0, 2);
            if (Number(this.value) > 10) this.value = '10';
        });
    }
});

// ══════════════════════════════════════════════════════════════
// CAMBIO DE VISTA DENTRO DE LA MISMA PÁGINA (globales: las usan los onclick del HTML)
// ══════════════════════════════════════════════════════════════

// buscar.php
function abrirMateriaGlobal(nombre, ciclo) {
    document.getElementById('vista-busqueda-global').style.display = 'none';
    document.getElementById('vista-trabajos-global').style.display = 'block';
    const cicloTxt = (!ciclo || ciclo === 'todos') ? 'Todos los ciclos' : `Ciclo ${ciclo}`;
    document.getElementById('tpTitleGlobal').textContent = `Trabajos: ${nombre} · ${cicloTxt}`;

    // TODO: fetch(`api/trabajos.php?materia=${encodeURIComponent(nombre)}&ciclo=${ciclo}`)
    const grid = document.getElementById('trabajosComunidadGrid');
    grid.innerHTML = [
        { tp: `Entrega Final - ${nombre}`, autor: 'Gonzalo Uthurry', img: IMG_A },
        { tp: `Entrega Parcial - ${nombre}`, autor: 'Sofía Gómez', img: IMG_B }
    ].map(tarjetaTrabajo).join('');
    window.scrollTo(0, 0);
}
function cerrarMateriaGlobal() {
    document.getElementById('vista-trabajos-global').style.display = 'none';
    document.getElementById('vista-busqueda-global').style.display = 'block';
}

// perfil.php
function abrirMateriaPerfil(nombre) {
    document.getElementById('vista-perfil-principal').style.display = 'none';
    document.getElementById('vista-trabajos').style.display = 'block';
    document.getElementById('tpTitle').textContent = `Subir TP: ${nombre}`;
    window.scrollTo(0, 0);
}
function cerrarMateriaPerfil() {
    document.getElementById('vista-trabajos').style.display = 'none';
    document.getElementById('vista-perfil-principal').style.display = 'block';
}