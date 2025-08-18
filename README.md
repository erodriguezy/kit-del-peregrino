# Kit del Peregrino — Santuario de la Virgen de Chaguaya

Aplicación web ligera para acompañar a los peregrinos con información esencial: misas, mapa de la ruta, pasos de preparación, consejos, catequesis, oraciones, música y descargas.

## ✨ Características
- **Menú principal** con accesos: Misas, Mapa, Pasos, Consejos, Catequesis, Oraciones, Música y Descargas.
- **Diseño responsivo** con Bootstrap (2 columnas en móvil y 3 en escritorio).
- **Iconografía** con Font Awesome.
- Estructura modular por páginas y hojas de estilo.

## 🧩 Estructura del proyecto
```
/
├── index.html
├── paginas/
│   ├── misas.html
│   ├── mapa.html
│   ├── pasos.html
│   ├── consejos.html
│   ├── catequesis.html
│   ├── oraciones.html
│   ├── musica.html
│   └── descargas.html
├── css/
│   ├── index.css
│   └── (estilos adicionales)
├── assets/
│   └── logos/
└── scripts/
    └── (si aplica)
```

## 🚀 Requisitos
- Cualquier servidor estático (por ejemplo, **VSCode Live Server** o `python -m http.server`).
- Navegador moderno.

## ▶️ Ejecutar en local
1. Clona el repositorio:
   ```bash
   git clone <URL_DE_TU_REPO>
   cd <CARPETA_DEL_REPO>
   ```
2. Sirve el proyecto (elige una opción):
   - Con VSCode: botón **Go Live**.
   - Con Python 3:
     ```bash
     python -m http.server 5500
     # Abre http://127.0.0.1:5500
     ```

## 🧱 Tecnologías
- **Bootstrap 5** para el grid y utilidades.
- **Font Awesome 6** para iconos.
- HTML5/CSS3/JS.

## 🧭 Buenas prácticas de caché en desarrollo
Añade parámetros de versión a tus archivos para evitar caché del navegador durante el desarrollo:
```html
<link rel="stylesheet" href="./css/index.css?v=1.0.0">
```
Y/o usa recarga forzada: **Ctrl+Shift+R** (Windows/Linux) — **Cmd+Shift+R** (macOS).

## 📦 Cómo añadir/actualizar este README en GitHub (línea de comandos)
> Si ya tienes el repo inicializado y remoto configurado, ve al paso 3.

1) Inicializa Git (solo la primera vez):
```bash
git init
git branch -M main
git remote add origin <URL_DE_TU_REPO>
```

2) Crea el README (si no existe) o reemplázalo por este archivo `README.md`.

3) Confirma y publica:
```bash
git add README.md
git commit -m "docs: añade README del proyecto"
git push -u origin main
```

## 🗺️ Publicar en GitHub Pages (opcional)
1. En **Settings → Pages**, selecciona **Deploy from a branch**.
2. Branch: `main` · Folder: `/root` (o `/docs` si publicas desde esa carpeta).
3. Guarda y espera a que aparezca la URL pública.

## 🤝 Contribuciones
Sugerencias y mejoras son bienvenidas vía issues o pull requests.

## 📄 Licencia
Pendiente de definir.
