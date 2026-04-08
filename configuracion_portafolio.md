# 📁 Configuración del Portafolio — Yudnaris Prado
> Última actualización: 2026-04-08

---

## 📌 Información General

| Campo              | Valor                                            |
|--------------------|--------------------------------------------------|
| **Nombre**         | Yudnaris Prado                                   |
| **Título**         | Yudnaris Prado \| Portafolio Profesional         |
| **Idioma base**    | Español (`lang="es"`)                            |
| **URL prevista**   | https://yudnarisprado.github.io/                 |
| **Email**          | yudprado@gmail.com                               |
| **WhatsApp**       | +57 310 500 4860                                 |
| **LinkedIn**       | https://www.linkedin.com/in/yudprado/            |
| **GitHub**         | https://github.com/yudprado17/                   |

---

## 🗂️ Estructura de Archivos

```
portafolioyuri/
├── index.html                      # Página principal (SPA en HTML puro)
├── CV YUDNARIS PRADO-ES.pdf        # CV descargable
├── css/
│   └── styles.css                  # Estilos personalizados (~762 líneas)
├── js/
│   └── scripts.js                  # Lógica JS: i18n, tema, QR, carruseles (~239 líneas)
├── img/
│   ├── fondo.jpeg                  # Imagen de fondo global (hero)
│   ├── foto_perfil.jpeg            # Foto de perfil (navbar + hero)
│   ├── proyecto1.jpeg              # Imagen: Sistema de Parqueadero
│   ├── proyecto2.jpeg              # Imagen: Gestor Mundial de Fútbol
│   └── proyecto3.jpeg              # Imagen: Juego de Bingo
└── Certificados/
    ├── MongoDB.png
    ├── Ef level 1.png
    ├── Computación Básica.png
    ├── Basic English Course A1.png
    ├── Cátedra Ser Emprendedor.jpeg
    ├── lenguage market.png
    ├── Ingles Básico A1 Verbos Comunes.png
    ├── Inglés Básico A1 Presente Simple.png
    └── Inglés Básico A1 VerboTo Be.png
```

---

## 🔗 Dependencias Externas (CDN)

| Biblioteca          | Versión  | Propósito                                   |
|---------------------|----------|---------------------------------------------|
| Bootstrap CSS       | 5.3.2    | Grid, componentes, carrusel, modal          |
| Bootstrap JS Bundle | 5.3.2    | Interactividad Bootstrap (Popper incluido)  |
| Font Awesome        | 6.4.2    | Íconos generales                            |
| Bootstrap Icons     | 1.11.1   | Íconos adicionales                          |
| Google Fonts        | —        | Playfair Display (700), DM Sans (300–600)   |
| QRCode.js           | 1.0.0    | Generación de código QR                     |

---

## 🧭 Secciones del Portafolio

| `id` sección        | Clase CSS principal    | Descripción                                          |
|---------------------|------------------------|------------------------------------------------------|
| `#inicio`           | `.hero-section`        | Hero con foto, nombre, tagline y botones de acción   |
| `#sobre-mi`         | `.section-dark`        | Bio, timeline formación/experiencia, habilidades     |
| `#proyectos`        | `.section-darker`      | Tarjetas de proyectos con enlace a GitHub            |
| `#certificados`     | `.section-darker`      | Carrusel de certificados con modal de zoom           |
| `#comentarios`      | `.section-dark`        | Carrusel de testimonios con autoplay                 |
| `#contacto-seccion` | `.section-dark`        | Formulario de contacto + info lateral                |
| `#qr-section`       | `.section-dark`        | QR del portafolio con descarga y compartir (WhatsApp)|
| `footer`            | `.footer-custom`       | Redes sociales y copyright                           |

---

## 🛠️ Funcionalidades Implementadas

### 🌐 Internacionalización (i18n)
- **Idiomas soportados:** Español (default) e Inglés
- **Mecanismo:** `data-i18n` en elementos HTML + objeto `translations` en `scripts.js`
- **Switching:** Botón `#langToggle` en la navbar
- **Persistencia:** No (se reinicia con la sesión)

### 🌙 Modo Claro / Oscuro
- **Default:** Modo oscuro (fondo profundo púrpura/negro)
- **Toggle:** Botón `#themeToggle` en la navbar
- **Persistencia:** `localStorage` con clave `portfolio-theme`
- **Implementación:** Clase `.light-mode` en `<body>`, variables CSS reasignadas en `:root`

### 🎠 Carrusel de Certificados (`#certificadosCarousel`)
- **Tipo:** Manual (no autoplay): `data-bs-ride="false"`
- **Slides:** 3 slides x 3 certificados = 9 certificados totales
- **Responsive:** En móvil solo muestra 1 certificado por slide
- **Controles:** Flechas prev/next con estilo circular púrpura

### 🖼️ Modal de Zoom (Certificados)
- **ID:** `#certModal`
- **Trigger:** Click en imágenes con clase `.zoomable`
- **Contenido:** Imagen en tamaño grande centrada con botón de cierre

### 🎠 Carrusel de Testimonios (`#testimoniosCarousel`)
- **Autoplay:** Sí — intervalo de 10 000 ms (10 s)
- **Slides:** 6 testimonios individuales
- **Controles:** Flechas + indicadores de puntos

### 📱 Generador de QR (`#qr-section`)
- **Librería:** QRCode.js v1.0.0
- **Contenido del QR:** URL actual del portafolio
- **Color del QR:** Púrpura `#9d4edd` sobre blanco
- **Acciones:** Descargar como PNG, Compartir por WhatsApp

### 📬 Formulario de Contacto (`#contactForm`)
- **Campos:** Nombre completo, Correo electrónico, Asunto, Mensaje
- **Submit:** Botón de envío (sin backend conectado actualmente)

---

## 🎨 Design System (CSS)

### Paleta de Colores

| Token CSS              | Modo Oscuro                        | Modo Claro                          |
|------------------------|------------------------------------|-------------------------------------|
| `--primary`            | `#9d4edd`                          | `#7b2cbf`                           |
| `--primary-hover`      | `#7b2cbf`                          | `#5a1e8a`                           |
| `--bg-section-dark`    | `rgba(13,0,24,0.92)`               | `rgba(245,240,255,0.96)`            |
| `--bg-section-darker`  | `rgba(8,0,16,0.96)`                | `rgba(235,228,250,0.98)`            |
| `--bg-navbar`          | `rgba(16,0,43,0.97)`               | `rgba(255,255,255,0.95)`            |
| `--text-white`         | `white`                            | `#1e1a2f`                           |
| `--text-muted`         | `rgba(255,255,255,0.72)`           | `#2d2a3e`                           |
| `--card-bg`            | `rgba(36,0,70,0.6)`                | `rgba(230,220,250,0.7)`             |

### Tipografía

| Uso                    | Fuente              | Peso(s)       |
|------------------------|---------------------|---------------|
| Títulos de sección     | Playfair Display    | 700           |
| Cuerpo / UI general    | DM Sans             | 300, 400, 500, 600 |

### Componentes CSS Custom

| Clase                  | Descripción                                    |
|------------------------|------------------------------------------------|
| `.hero-badge`          | Chips de habilidades en el Hero                |
| `.btn-hero`            | Botón principal (fondo sólido)                 |
| `.btn-hero-outline`    | Botón secundario (borde)                       |
| `.section-dark`        | Fondo oscuro/tenue para secciones alternas     |
| `.section-darker`      | Fondo más oscuro                               |
| `.purple-line`         | Línea decorativa morada sobre títulos          |
| `.timeline-item`       | Ítem flexbox para línea de tiempo              |
| `.project-card`        | Tarjeta de proyecto con hover animado          |
| `.badge-soft`          | Chip de habilidades blandas                    |
| `.badge-status`        | Etiqueta de estado (en curso, etc.)            |
| `.cert-item`           | Tarjeta de certificado con hover               |
| `.zoomable`            | Imagen con cursor zoom + efecto hover          |
| `.carousel-wrapper`    | Contenedor de carrusel de testimonios          |
| `.btn-github`          | Botón de enlace a GitHub                       |
| `.btn-descargar`       | Botón de descarga / acción QR                  |
| `.social-icon`         | Ícono circular para redes en el footer         |
| `.nav-btn-custom`      | Botones de tema/idioma en la navbar            |

---

## 📦 Proyectos Listados

| # | Título                              | Tecnología     | Repositorio GitHub                                    |
|---|-------------------------------------|----------------|-------------------------------------------------------|
| 1 | Sistema de Gestión de Parqueadero   | Python + NumPy | https://github.com/yudprado17/ParqueaderoCarro.py     |
| 2 | Gestor de Grupo — Mundial de Fútbol | Python + Pandas| https://github.com/yudprado17/Mundial.py              |
| 3 | Juego de Bingo por Consola          | Python         | https://github.com/yudprado17/Bingo_Python_yud        |

---

## 📜 Certificados Registrados

| Slide | Certificado                          | Archivo                                              |
|-------|--------------------------------------|------------------------------------------------------|
| 1     | MongoDB Certificate                  | `Certificados/MongoDB.png`                           |
| 1     | EF Standard English Test (A1)        | `Certificados/Ef level 1.png`                        |
| 1     | Computación Básica                   | `Certificados/Computación Básica.png`                |
| 2     | Basic English Course A1              | `Certificados/Basic English Course A1.png`           |
| 2     | Cátedra Ser Emprendedor              | `Certificados/Cátedra Ser Emprendedor.jpeg`          |
| 2     | Language Market                      | `Certificados/lenguage market.png`                   |
| 3     | Inglés Básico A1 — Verbos Comunes    | `Certificados/Ingles Básico A1 Verbos Comunes.png`   |
| 3     | Inglés Básico A1 — Presente Simple   | `Certificados/Inglés Básico A1 Presente Simple.png`  |
| 3     | Inglés Básico A1 — Verbo To Be       | `Certificados/Inglés Básico A1 VerboTo Be.png`       |

---

## 💬 Testimonios Registrados

| # | Autor           | Rol                                       |
|---|-----------------|-------------------------------------------|
| 1 | Nicol Alba      | Compañero de trabajo y estudio            |
| 2 | Wilmar del Valle| Compañero de trabajo y estudio            |
| 3 | Jorge Pérez     | Docente de Desarrollo de Software - CESDE |
| 4 | Hector Camacho  | Mentor                                    |
| 5 | Andrea Tibocha  | Compañera de trabajo y estudio            |
| 6 | Karol Ahumada   | Compañera de trabajo y estudio            |

---

## ⚠️ Notas Técnicas

> [!NOTE]
> El archivo `index.html` tiene una etiqueta `<body>` duplicada (líneas 30 y 32). No afecta la renderización pero debería corregirse.

> [!WARNING]
> El formulario de contacto (`#contactForm`) no tiene backend conectado. El botón de envío actualmente no realiza ninguna acción real.

> [!TIP]
> Para conectar el formulario sin backend, se recomienda usar **Formspree** o **EmailJS**.

---

## 🚀 Estado del Proyecto

| Módulo                     | Estado          |
|----------------------------|-----------------|
| Estructura HTML            | ✅ Completo     |
| Estilos CSS personalizados | ✅ Completo     |
| Navbar responsive          | ✅ Completo     |
| Hero section               | ✅ Completo     |
| Sobre Mí + Timeline        | ✅ Completo     |
| Habilidades blandas        | ✅ Completo     |
| Habilidades técnicas       | ✅ Completo     |
| Proyectos                  | ✅ Completo     |
| Carrusel Certificados      | ✅ Completo     |
| Modal Zoom Certificados    | ✅ Completo     |
| Carrusel Testimonios       | ✅ Completo     |
| Formulario de Contacto     | ⚠️ Sin backend  |
| Generador QR               | ✅ Completo     |
| Footer con redes sociales  | ✅ Completo     |
| Modo Claro / Oscuro        | ✅ Completo     |
| Internacionalización ES/EN | ✅ Completo     |
| SEO básico (meta tags)     | ✅ Completo     |
| Open Graph (og:)           | ✅ Completo     |
| Responsive móvil           | ✅ Completo     |
