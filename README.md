# NewsHub — Prototipo funcional (Entrega 2)

Prototipo funcional de la Plataforma Web de Noticias, desarrollado con **HTML, CSS y JavaScript puro** (sin frameworks), como parte de la Entrega 2 (Semana 5) del módulo de Desarrollo de Front-end.

## Cómo verlo

No necesitas instalar nada ni levantar un servidor: simplemente abre `index.html` en cualquier navegador (doble clic, o clic derecho → "Abrir con..."). Todas las páginas están enlazadas entre sí desde ahí.

> Si prefieres usar un servidor local (opcional, no obligatorio): `python3 -m http.server` desde esta carpeta, y entra a `http://localhost:8000`.

## Estructura del proyecto

```
├── index.html          Página de inicio (Home)
├── listado.html         Catálogo de noticias (búsqueda, filtro, mini CRUD)
├── detalle.html         Vista detallada de una noticia
├── contacto.html        Formulario de contacto con validaciones
├── css/
│   └── styles.css       Estilos globales del sitio
├── js/
│   ├── data.js           Datos de las noticias (estructurados como JSON)
│   ├── storage.js         Favoritos y mini CRUD sobre localStorage
│   ├── main.js            Utilidades compartidas (menú móvil, formateo)
│   ├── home.js            Lógica de la página de inicio
│   ├── listado.js         Lógica del listado (buscador, filtro, CRUD)
│   ├── detalle.js         Lógica de la vista de detalle
│   └── contacto.js        Validación del formulario de contacto
└── assets/
    └── img/               (reservado para imágenes propias, si se agregan)
```

## Decisiones técnicas

- **Datos en `data.js` en vez de un archivo `.json` + `fetch()`**: al abrir los archivos HTML directamente desde el disco (protocolo `file://`), los navegadores bloquean `fetch()` a archivos locales por políticas de CORS. Para garantizar que el sitio funcione en cualquier navegador sin necesidad de un servidor, los datos están estructurados exactamente como JSON pero se cargan como una constante de JavaScript (`NOTICIAS_BASE`).
- **Imágenes**: se usan imágenes de [Picsum Photos](https://picsum.photos) (placeholder con semilla fija por noticia), ya que el proyecto no incluye fotografías propias en esta fase.
- **Persistencia**: favoritos y noticias creadas/eliminadas por el usuario (mini CRUD) se guardan en `localStorage`, por lo que persisten entre sesiones del mismo navegador.

## Funcionalidades implementadas

- ✅ Renderizado dinámico del catálogo de noticias desde datos estructurados
- ✅ Búsqueda de noticias por texto (título y descripción)
- ✅ Filtro por categoría (educativas, tecnológicas, turísticas, comerciales)
- ✅ Gestión de favoritos con `localStorage` (agregar/quitar desde el detalle, ver lista de favoritos)
- ✅ Mini CRUD: crear noticias nuevas (modal con formulario) y eliminar noticias existentes
- ✅ Formulario de contacto con validaciones (campos obligatorios, formato de correo) y mensaje de confirmación
- ✅ Diseño responsive con menú de navegación adaptado a móvil

## Próximos pasos (Entrega 3)

- Migración a Angular (componentes y data binding)
- Despliegue en GitHub Pages, Netlify o Vercel
