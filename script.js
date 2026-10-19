document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Control de la Barra de Navegación Inferior ---
    const bottomNav = document.getElementById('bottomNav');
    const heroSection = document.getElementById('heroSection');
    const navItems = document.querySelectorAll('.nav-item');

    // Revelar la barra al hacer scroll
    window.addEventListener('scroll', () => {
        const heroHeight = heroSection.offsetHeight;
        
        if (window.scrollY > heroHeight * 0.8) {
            bottomNav.classList.remove('hidden');
        } else {
            bottomNav.classList.add('hidden');
        }
    });

    // Sombras redondas para el botón activo
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // --- 2. Interacción de los Módulos de Entrega (Upload) ---
    const fileInputs = document.querySelectorAll('.file-upload-input');
    
    fileInputs.forEach(input => {
        input.addEventListener('change', function() {
            // Verifica si el usuario seleccionó un archivo
            if(this.files && this.files.length > 0) {
                const fileName = this.files[0].name;
                // Busca el párrafo hermano para cambiar el texto
                const textElement = this.parentElement.querySelector('p');
                textElement.innerHTML = `Listo para subir:<br><small>${fileName}</small>`;
                
                // Cambia el ícono para dar feedback visual
                const iconElement = this.parentElement.querySelector('i');
                iconElement.classList.replace('fa-cloud-arrow-up', 'fa-file-circle-check');
                iconElement.style.color = 'var(--blue-top)';
            }
        });
    });

});

document.addEventListener('DOMContentLoaded'), () => {
    // ... AQUÍ ARRIBA SE MANTIENE TODO TU CÓDIGO ANTERIOR ...

    // ==========================================
    // LÓGICA DE BÚSQUEDA Y MATERIAS (buscar.php)
    // ==========================================
    
    const materiasGrid = document.getElementById('materiasGrid');
    const searchInput = document.getElementById('searchInput');
    const yearSelector = document.getElementById('yearSelector');
    const termSelector = document.getElementById('termSelector');
    const categorySelector = document.getElementById('categorySelector');

    if (materiasGrid) {
        
        // Base de datos adaptada para estructurar Año, Cuatrimestre y Categoría
        const materiasDB = [
            { nombre: "Taller de Diseño I", anio: "Año 1", cuatrimestre: "1er cuatrimestre", categoria: "taller", icon: "fa-pen-nib" },
            { nombre: "Tecnología I", anio: "Año 1", cuatrimestre: "1er cuatrimestre", categoria: "tecnología", icon: "fa-microchip" },
            { nombre: "Sistemas de Representación I", anio: "Año 1", cuatrimestre: "1er cuatrimestre", categoria: "sistemas", icon: "fa-compass-drafting" },
            
            { nombre: "Taller de Diseño II", anio: "Año 1", cuatrimestre: "2do cuatrimestre", categoria: "taller", icon: "fa-pen-nib" },
            { nombre: "Sistemas de Representación II", anio: "Año 1", cuatrimestre: "2do cuatrimestre", categoria: "sistemas", icon: "fa-desktop" },
            
            { nombre: "Tecnología Orientada I", anio: "Año 2", cuatrimestre: "1er cuatrimestre", categoria: "tecnología", icon: "fa-code" },
            
            { nombre: "Taller Multimedial I", anio: "Año 3", cuatrimestre: "1er cuatrimestre", categoria: "taller", icon: "fa-layer-group" },
            
            { nombre: "Taller Multimedial III", anio: "Año 4", cuatrimestre: "1er cuatrimestre", categoria: "taller", icon: "fa-layer-group" },
            
            { nombre: "Taller Multimedial IV", anio: "Año 4", cuatrimestre: "2do cuatrimestre", categoria: "taller", icon: "fa-layer-group" },
            { nombre: "Tecnología Multimedial IV", anio: "Año 4", cuatrimestre: "2do cuatrimestre", categoria: "tecnología", icon: "fa-code" },
            { nombre: "Sistemas de Información", anio: "Año 4", cuatrimestre: "2do cuatrimestre", categoria: "sistemas", icon: "fa-network-wired" },
            
            { nombre: "Proyecto Final de Diseño", anio: "Año 5", cuatrimestre: "2do cuatrimestre", categoria: "taller", icon: "fa-flag-checkered" }
        ];

        // Función que evalúa los 4 campos (Texto, Año, Cuatrimestre, Categoría)
        function renderizarMaterias() {
            materiasGrid.innerHTML = '';
            
            const textoVal = searchInput.value.toLowerCase();
            const yearVal = yearSelector.value;
            const termVal = termSelector.value;
            const catVal = categorySelector.value;

            const materiasFiltradas = materiasDB.filter(materia => {
                const coincideTexto = materia.nombre.toLowerCase().includes(textoVal);
                const coincideYear = (yearVal === "todos" || materia.anio === yearVal);
                const coincideTerm = (termVal === "todos" || materia.cuatrimestre === termVal);
                const coincideCat = (catVal === "todas" || materia.categoria === catVal);

                return coincideTexto && coincideYear && coincideTerm && coincideCat;
            });

            if (materiasFiltradas.length === 0) {
                materiasGrid.innerHTML = '<p style="grid-column: span 4; text-align: center; color: var(--text-muted); font-size: 0.85rem; margin-top: 20px;">No se encontraron materias con estos filtros.</p>';
                return;
            }

            materiasFiltradas.forEach(materia => {
                const cardHTML = `
                    <article class="subject-card">
                        <div class="subject-icon-box">
                            <i class="fa-solid ${materia.icon}"></i>
                        </div>
                        <div class="subject-info">
                            <h4 title="${materia.nombre}">${materia.nombre}</h4>
                            <p>${materia.anio} • ${materia.cuatrimestre}</p>
                        </div>
                    </article>
                `;
                materiasGrid.innerHTML += cardHTML;
            });
        }

        // Agregar Eventos a cada filtro para que actualicen en tiempo real
        if (searchInput) searchInput.addEventListener('input', renderizarMaterias);
        if (yearSelector) yearSelector.addEventListener('change', renderizarMaterias);
        if (termSelector) termSelector.addEventListener('change', renderizarMaterias);
        if (categorySelector) categorySelector.addEventListener('change', renderizarMaterias);

        // Renderizado inicial al entrar a la página
        renderizarMaterias();
    }
}