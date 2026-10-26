document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Ocultar Barra Inferior en Scroll (Solo Hero de index.php) ---
    const bottomNav = document.getElementById('bottomNav');
    const heroSection = document.getElementById('heroSection');

    if(heroSection && bottomNav) {
        window.addEventListener('scroll', () => {
            const heroHeight = heroSection.offsetHeight;
            if (window.scrollY > heroHeight * 0.8) {
                bottomNav.classList.remove('hidden');
            } else {
                bottomNav.classList.add('hidden');
            }
        });
        window.dispatchEvent(new Event('scroll'));
    } else if (bottomNav) {
        bottomNav.classList.remove('hidden'); // Siempre visible en el resto de páginas
    }

    // --- 2. Inyección de Trabajos Random (index.php) ---
    const communityGrid = document.getElementById('communityGrid');
    if(communityGrid) {
        const communityData = [
            { autor: "Gonzalo Uthurry", tp: "TP1 - Manual de Marca", img: "https://i.postimg.cc/N9cdyw6w/image.jpg" },
            { autor: "Nahuel Abate", tp: "TP2 - Sistema de Interfaz", img: "https://i.postimg.cc/BtJh44ZM/image.jpg" },
            { autor: "Sofía Gómez", tp: "TP3 - Prototipo Final", img: "https://i.postimg.cc/BtJh44ZM/image.jpg" },
            { autor: "Lucas Silva", tp: "TP4 - Diseño Estratégico", img: "https://i.postimg.cc/N9cdyw6w/image.jpg" },
            { autor: "Clara Vega", tp: "TP5 - Animación 2D", img: "https://i.postimg.cc/N9cdyw6w/image.jpg" },
            { autor: "Marcos Díaz", tp: "TP6 - Modelado 3D", img: "https://i.postimg.cc/BtJh44ZM/image.jpg" }
        ];

        communityData.forEach(item => {
            communityGrid.innerHTML += `
                <article class="community-card">
                    <div class="card-preview" style="background-image: url('${item.img}');"></div>
                    <div class="card-avatar"><i class="fa-solid fa-user"></i></div>
                    <div class="card-content">
                        <h4 class="card-title">${item.tp}</h4>
                        <p class="card-author">${item.autor}</p>
                    </div>
                </article>
            `;
        });
    }

    // --- BASE DE DATOS DE MATERIAS COMPLETA CON CATEGORÍAS ---
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

    // --- 3A. LÓGICA: BUSCADOR GLOBAL (buscar.php) ---
    const gridGlobal = document.getElementById('materiasGridGlobal');
    if (gridGlobal) {
        const searchInput = document.getElementById('searchInput');
        const yearSelG = document.getElementById('yearSelectorGlobal');
        const termSelG = document.getElementById('termSelectorGlobal');
        const catSel = document.getElementById('categorySelector');

        function renderGlobal() {
            gridGlobal.innerHTML = '';
            const txt = searchInput.value.toLowerCase();
            const y = yearSelG.value;
            const t = termSelG.value;
            const c = catSel.value;

            const filtradas = materiasDB.filter(m => {
                return (m.nombre.toLowerCase().includes(txt)) &&
                       (y === "todos" || m.anio === y) &&
                       (t === "todos" || m.cuatrimestre === t) &&
                       (c === "todas" || m.categoria === c);
            });

            if (filtradas.length === 0) {
                gridGlobal.innerHTML = '<p style="grid-column: span 4; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No se encontraron materias globales.</p>';
                return;
            }

            filtradas.forEach(m => {
                gridGlobal.innerHTML += `
                    <article class="subject-card" onclick="abrirMateriaGlobal('${m.nombre}')">
                        <div class="subject-icon-box"><i class="fa-solid ${m.icon}"></i></div>
                        <div class="subject-info">
                            <h4 title="${m.nombre}">${m.nombre}</h4>
                            <p>${m.anio} • ${m.categoria.charAt(0).toUpperCase() + m.categoria.slice(1)}</p>
                        </div>
                    </article>`;
            });
        }

        searchInput.addEventListener('input', renderGlobal);
        yearSelG.addEventListener('change', renderGlobal);
        termSelG.addEventListener('change', renderGlobal);
        catSel.addEventListener('change', renderGlobal);
        renderGlobal();
    }

    // --- 3B. LÓGICA: MIS MATERIAS (perfil.php) ---
    const gridPerfil = document.getElementById('materiasGrid');
    if (gridPerfil) {
        const yearSelP = document.getElementById('yearSelector');
        const termSelP = document.getElementById('termSelector');

        function renderPerfil() {
            gridPerfil.innerHTML = '';
            const y = yearSelP.value;
            const t = termSelP.value;

            const filtradas = materiasDB.filter(m => {
                return (y === "todos" || m.anio === y) &&
                       (t === "todos" || m.cuatrimestre === t);
            });

            if (filtradas.length === 0) {
                gridPerfil.innerHTML = '<p style="grid-column: span 4; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No tenés materias en este filtro.</p>';
                return;
            }

            filtradas.forEach(m => {
                gridPerfil.innerHTML += `
                    <article class="subject-card" onclick="abrirMateriaPerfil('${m.nombre}')">
                        <div class="subject-icon-box"><i class="fa-solid ${m.icon}"></i></div>
                        <div class="subject-info">
                            <h4 title="${m.nombre}">${m.nombre}</h4>
                            <p>${m.anio} • ${m.cuatrimestre}</p>
                        </div>
                    </article>`;
            });
        }

        yearSelP.addEventListener('change', renderPerfil);
        termSelP.addEventListener('change', renderPerfil);
        renderPerfil();
    }

    // --- 4. Subida Visual de Fotos y Menús ---
    const profileMenuBtn = document.getElementById('profileMenuBtn');
    const profileDropdown = document.getElementById('profileDropdown');
    if (profileMenuBtn && profileDropdown) {
        profileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
        });
        document.addEventListener('click', (e) => {
            if (!profileDropdown.contains(e.target) && e.target !== profileMenuBtn) profileDropdown.classList.remove('show');
        });
    }

    const fileInputs = document.querySelectorAll('.file-upload-input');
    fileInputs.forEach(input => {
        input.addEventListener('change', function() {
            if(this.files && this.files.length > 0) {
                const textElement = this.parentElement.querySelector('p');
                textElement.innerHTML = `Listo para subir:<br><small>${this.files[0].name}</small>`;
                const iconElement = this.parentElement.querySelector('i');
                iconElement.classList.replace('fa-cloud-arrow-up', 'fa-file-circle-check');
                iconElement.style.color = 'var(--blue-top)';
            }
        });
    });

    // --- 5. Lógica del Pop-up Modal de Logout ---
    const logoutTrigger = document.getElementById('logoutTrigger');
    const logoutModal = document.getElementById('logoutModal');
    const cancelLogout = document.getElementById('cancelLogout');

    if (logoutTrigger && logoutModal && cancelLogout) {
        // Mostrar Modal
        logoutTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            logoutModal.style.display = 'flex';
        });

        // Ocultar Modal al cancelar
        cancelLogout.addEventListener('click', () => {
            logoutModal.style.display = 'none';
        });

        // Ocultar si se clickea fuera del cartel blanco
        logoutModal.addEventListener('click', (e) => {
            if(e.target === logoutModal) {
                logoutModal.style.display = 'none';
            }
        });
    }

    // --- 6. SIMULADOR DE CARGA DE PDF (crear.php) ---
    const pdfUrlInput = document.getElementById('pdfUrlInput');
    const pdfViewer = document.getElementById('pdfViewer');

    if (pdfUrlInput && pdfViewer) {
        pdfUrlInput.addEventListener('input', function() {
            const url = this.value.trim();
            
            // Si hay un texto con más de 5 caracteres, simulamos procesamiento
            if (url.length > 5) {
                // Mensaje de carga con tipografía base y color blanco
                pdfViewer.innerHTML = '<p style="color: white; text-align: center; padding: 20px; font-weight: 700; font-family: \'Roboto Mono\', monospace;">Procesando archivo...</p>';
                // Forzamos a que se muestre como flex (así hereda tu CSS)
                pdfViewer.style.display = 'flex'; 

                // Simulamos 1.5 segundos de carga de servidor
                setTimeout(() => {
                    pdfViewer.innerHTML = `
                        <img src="https://via.placeholder.com/800x1130/CBD5E1/333333?text=P%C3%A1gina+1+PDF" alt="Página 1">
                        <img src="https://via.placeholder.com/800x1130/CBD5E1/333333?text=P%C3%A1gina+2+PDF" alt="Página 2">
                        <img src="https://via.placeholder.com/800x1130/CBD5E1/333333?text=P%C3%A1gina+3+PDF" alt="Página 3">
                    `;
                }, 1500);
            } else {
                // Si el usuario borra la URL, vaciamos la caja para que el CSS la oculte
                pdfViewer.innerHTML = '';
                pdfViewer.style.display = 'none';
            }
        });
    }

});

// --- FUNCIONES GLOBALES DE CAMBIO DE VISTA DENTRO DE LA MISMA PÁGINA ---

// Para buscar.php
function abrirMateriaGlobal(nombre) {
    document.getElementById('vista-busqueda-global').style.display = 'none';
    document.getElementById('vista-trabajos-global').style.display = 'block';
    document.getElementById('tpTitleGlobal').textContent = `Trabajos: ${nombre}`;
    
    // Inyectar un trabajo de ejemplo en la vista global
    const gridTrabajos = document.getElementById('trabajosComunidadGrid');
    if(gridTrabajos) {
        gridTrabajos.innerHTML = `
            <article class="project-card">
                <div class="project-cover" style="background-image: url('https://i.postimg.cc/N9cdyw6w/image.jpg'); background-size: cover; background-position: center;"></div>
                <div class="project-data">
                    <h4>Entrega Final - ${nombre}</h4>
                    <p>Por Gonzalo Uthurry</p>
                </div>
            </article>`;
    }
    window.scrollTo(0,0);
}
function cerrarMateriaGlobal() {
    document.getElementById('vista-trabajos-global').style.display = 'none';
    document.getElementById('vista-busqueda-global').style.display = 'block';
}

// Para perfil.php
function abrirMateriaPerfil(nombre) {
    document.getElementById('vista-perfil-principal').style.display = 'none';
    document.getElementById('vista-trabajos').style.display = 'block';
    document.getElementById('tpTitle').textContent = `Subir TP: ${nombre}`;
    window.scrollTo(0,0);
}
function cerrarMateriaPerfil() {
    document.getElementById('vista-trabajos').style.display = 'none';
    document.getElementById('vista-perfil-principal').style.display = 'block';
}