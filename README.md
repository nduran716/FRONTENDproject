# NewNews.com — Prototipo funcional (Entrega 2)

Prototipo funcional de la Plataforma Web de Noticias, desarrollado con **HTML, CSS y JavaScript puro** (sin frameworks), como parte de la Entrega 2 (Semana 5) del módulo de Desarrollo de Front-end.

## Cómo verlo

No necesitas instalar nada ni levantar un servidor: simplemente abre `index.html` en cualquier navegador (doble clic, o clic derecho → "Abrir con..."). Todas las páginas están enlazadas entre sí desde ahí.

## Estructura del proyecto

```
├── index.html          Página de inicio (Home)
├── listado.html         Catálogo de noticias (con favoritos y eliminar)
├── detalle.html         Vista detallada de una noticia
├── contacto.html        Formulario de contacto con validaciones
├── css/
│   └── styles.css       Estilos globales del sitio
├── js/
│   ├── data.js           Datos de las noticias (estructurados como JSON)
│   ├── storage.js         Favoritos y noticias eliminadas, guardados en localStorage
│   ├── main.js            Utilidades compartidas (menú móvil, formateo)
│   ├── home.js            Lógica de la página de inicio
│   ├── listado.js         Lógica del listado (favoritos, eliminar)
│   ├── detalle.js         Lógica de la vista de detalle
│   └── contacto.js        Validación del formulario de contacto
└── assets/
    └── img/               (reservado para imágenes propias, si se agregan)
```

## Decisiones técnicas

- **Los datos de las noticias están en `data.js`, no en un archivo `.json` aparte**: si abres el sitio haciendo doble clic en el archivo (sin usar un servidor), los navegadores no dejan cargar archivos `.json` por seguridad. Para que el sitio funcione siempre, sin importar cómo lo abras, dejé los datos guardados directamente en un archivo de JavaScript (`data.js`), en una variable llamada `NOTICIAS_BASE`.
- **Imágenes**: son fotos reales de internet, las mismas que ya había usado antes en mi mockup de Figma.
- **Favoritos y noticias eliminadas**: se guardan en la memoria del navegador (`localStorage`), así que si cierras la página y la vuelves a abrir, todo sigue como lo dejaste.
- **Código simple a propósito**: escribí las funciones de la forma más clásica posible (`function nombre() {}`), y para revisar que el correo sea válido no usé nada complicado, solo revisé que tenga una arroba y un punto. La idea fue que todo se pueda leer y explicar fácilmente.

## Funcionalidades implementadas

- ✅ Renderizado dinámico del catálogo de noticias desde datos estructurados
- ✅ Gestión de favoritos con `localStorage` (agregar/quitar desde el detalle, ver lista de favoritos)
- ✅ Eliminar noticias del catálogo (se guarda en `localStorage` cuáles se han quitado)
- ✅ Formulario de contacto con validaciones (campos obligatorios, formato de correo) y mensaje de confirmación
- ✅ Diseño responsive con menú de navegación adaptado a móvil
