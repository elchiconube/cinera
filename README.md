# Faedo de Ciñera - Sitio Web Informativo

Sitio web informativo sobre la ruta de senderismo del **Faedo de Ciñera** en León, España. Construido con Astro para máximo rendimiento y SEO.

🌐 **URL**: [https://faedo.es](https://faedo.es)

## 📋 Descripción

Guía completa de senderismo del Faedo de Ciñera que incluye:

- 🗺️ Mapa interactivo con datos GPS reales (Leaflet + PNOA)
- 📍 Puntos de interés georreferenciados
- 📥 Descarga de track GPX
- 📖 Información sobre historia, naturaleza y patrimonio minero
- 🌳 Flora y fauna del hayedo
- 🪨 Geología y formaciones naturales (Marmitas de Gigante)
- 🏆 Premio "Bosque Mejor Cuidado de España 2007"
- 🥾 Guía práctica para visitantes
- 🎭 Eventos y relatos del Faedo
- ❓ FAQ con preguntas frecuentes
- 📝 Blog con 12 artículos especializados

## ✨ Características Técnicas

### Performance & SEO
- ✅ **Rendimiento**: Astro con generación estática (SSG)
- ✅ **PageSpeed Score**: 75/100 móvil, 90+/100 desktop
- ✅ **Optimización de imágenes**: Sharp + Astro Image (WebP, responsive, lazy loading)
- ✅ **SEO optimizado**: Schema.org (HikingTrail + TouristAttraction + BreadcrumbList + FAQPage)
- ✅ **Meta tags completos**: Open Graph, Twitter Cards, canonical URLs
- ✅ **Sitemap XML**: Generación automática con prioridades SEO
- ✅ **Google Fonts async**: Carga no bloqueante

### Accesibilidad & UX
- ✅ **WCAG 2.1 AA**: 92/100 en auditoría de accesibilidad
- ✅ **ARIA labels**: Navegación semántica completa
- ✅ **Skip links**: Navegación por teclado optimizada
- ✅ **Contraste AAA**: Colores optimizados para legibilidad
- ✅ **Prefers-reduced-motion**: Respeta preferencias de animación
- ✅ **Breadcrumbs**: Con schema y aria-current

### Tecnología
- ✅ **Responsive**: TailwindCSS v4 con diseño mobile-first
- ✅ **Mapas interactivos**: Leaflet v1.9.4 con ortofoto PNOA del IGN
- ✅ **Content Collections**: Tipado estricto con Zod
- ✅ **MDX**: Contenido enriquecido con componentes
- ✅ **View Transitions**: Navegación fluida entre páginas
- ✅ **Analytics**: Google Analytics 4 optimizado para performance
- ✅ **PWA Ready**: Meta theme-color, site.webmanifest

## 🚀 Estructura del Proyecto

```text
├── public/
│   ├── gpx/                      # Archivos GPX descargables
│   │   └── faedo.gpx            # Track GPS de la ruta (108 puntos)
│   ├── favicon.ico
│   ├── robots.txt
│   ├── site.webmanifest
│   └── web-app-manifest-*.png   # Iconos PWA
├── src/
│   ├── assets/                   # Imágenes optimizadas por Astro (56 archivos)
│   │   ├── *.webp               # Fotos del Faedo, hayas, paisajes
│   │   ├── *.mp4                # Videos hero y galería
│   │   └── *.svg                # Iconos y gráficos
│   ├── components/               # Componentes reutilizables
│   │   ├── Cards/               # Tarjetas especializadas
│   │   │   ├── POICard.astro    # Puntos de interés
│   │   │   └── PostCard.astro   # Artículos de blog
│   │   ├── Breadcrumbs.astro    # Migas de pan con schema
│   │   ├── Cards.astro          # Grid de tarjetas
│   │   ├── FAQ.astro            # Preguntas frecuentes
│   │   ├── Gallery.astro        # Galería de imágenes (24 fotos)
│   │   ├── GoogleAnalytics.astro
│   │   ├── GoogleSiteVerification.astro
│   │   ├── Guia.astro           # CTA para tours guiados
│   │   ├── Hero.astro           # Hero con video
│   │   ├── Layout.astro         # Layout principal
│   │   ├── MapLeaflet.astro     # Mapa interactivo Leaflet
│   │   ├── MediaGrid.astro      # Grid de videos/imágenes
│   │   ├── ScrollRevealText.astro
│   │   ├── SectionHeader.astro
│   │   └── Seo.astro            # Meta tags y schemas
│   ├── content/                  # Content Collections
│   │   ├── blog/                # 12 artículos del blog
│   │   │   ├── arboles-del-faedo-de-cinera.md
│   │   │   ├── bocamina-menos-cincuenta.md
│   │   │   ├── como-llegar-faedo-de-cinera.md
│   │   │   ├── desman-iberico-faedo-de-cinera.md
│   │   │   ├── faedo-de-cinera-con-ninos.md
│   │   │   ├── guia-ornitologica-faedo-de-cinera.md
│   │   │   ├── la-magia-del-faedo-de-cinera.md
│   │   │   ├── marmitas-de-gigante.md (NUEVO)
│   │   │   ├── mejor-epoca-visitar-faedo-de-cinera.md
│   │   │   ├── origen-nombre-faedo.md
│   │   │   ├── que-ver-cerca-faedo-de-cinera.md
│   │   │   └── senderismo-en-leon-faedo-de-cinera.md
│   │   └── config.ts            # Schemas Zod
│   ├── data/                     # Datos estructurados
│   │   └── cards.ts             # Configuración de tarjetas
│   ├── pages/                    # Páginas del sitio (18 páginas)
│   │   ├── 404.astro
│   │   ├── index.astro          # Página principal
│   │   ├── blog/
│   │   │   ├── [slug].astro     # Páginas dinámicas de blog
│   │   │   └── index.astro      # Listado de blog
│   │   ├── ruta/
│   │   │   └── faedo-de-cinera.astro
│   │   ├── eventos.astro
│   │   ├── faq.astro            # Con FAQPage schema
│   │   ├── flora-fauna.astro
│   │   ├── geologia.astro
│   │   ├── guia-visitantes.astro
│   │   ├── haeda.astro
│   │   ├── haya-fagus.astro
│   │   ├── historia-naturaleza.astro
│   │   ├── patrimonio-minero.astro
│   │   ├── premio-2007.astro
│   │   ├── relatos.astro
│   │   └── rss.xml.js           # Feed RSS
│   ├── scripts/                  # Scripts de utilidad
│   ├── styles/
│   │   └── globals.css          # Estilos globales + TailwindCSS v4
│   ├── utils/                    # Funciones de utilidad
│   └── consts.ts                # Constantes del sitio
├── astro.config.mjs             # Configuración Astro + Sharp
├── tailwind.config.mjs          # TailwindCSS v4
├── tsconfig.json
└── package.json
```

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **[Astro](https://astro.build)** | v5.13.4 | Framework principal (SSG) |
| **[TailwindCSS](https://tailwindcss.com)** | v4.1.14 | Estilos y diseño responsive |
| **[Leaflet](https://leafletjs.com)** | v1.9.4 | Mapas interactivos |
| **[Sharp](https://sharp.pixelplumbing.com/)** | v0.34.2 | Optimización de imágenes |
| **[MDX](https://mdxjs.com/)** | v4.3.4 | Contenido enriquecido |
| **TypeScript** | Strict | Tipado estático |
| **Google Analytics** | GA4 | Analítica web |

### Fuentes
- **[Wittgenstein](https://fonts.google.com/specimen/Wittgenstein)** - Headings (serif)
- **[Figtree](https://fonts.google.com/specimen/Figtree)** - Body text (sans-serif)

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                              |
| :------------------------ | :-------------------------------------------------- |
| `npm install`             | Instala las dependencias                            |
| `npm run dev`             | Inicia servidor de desarrollo en `localhost:4321`   |
| `npm run build`           | Genera el sitio estático en `./dist/`               |
| `npm run preview`         | Previsualiza el build localmente                    |
| `npm run check`           | Verifica tipos TypeScript                           |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro                       |

## 📦 Instalación y Desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/elchiconube/faedo.git
cd faedo

# Instalar dependencias
npm install

# Configurar variables de entorno (opcional)
# Añade tu Google Analytics ID en src/consts.ts:
# export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview
```

## 📊 Contenido del Sitio

### Páginas Principales (18)
- **Inicio** (`/`) - Hero con video, galería multimedia, secciones destacadas
- **La Ruta** (`/ruta/faedo-de-cinera`) - Mapa interactivo, GPX, datos técnicos
- **Historia y Naturaleza** (`/historia-naturaleza`) - Contexto histórico y natural
- **Flora y Fauna** (`/flora-fauna`) - Especies del hayedo
- **Geología** (`/geologia`) - Formaciones geológicas y Marmitas de Gigante
- **Patrimonio Minero** (`/patrimonio-minero`) - Bocaminas y Pozo Ibarra
- **Haya Fagus** (`/haya-fagus`) - Árbol emblemático de 500 años
- **Premio 2007** (`/premio-2007`) - Bosque Mejor Cuidado de España
- **Guía de Visitantes** (`/guia-visitantes`) - Información práctica
- **Eventos** (`/eventos`) - Actividades y celebraciones
- **Relatos** (`/relatos`) - Historias y leyendas
- **Haeda** (`/haeda`) - Personaje mítico del bosque
- **FAQ** (`/faq`) - 12 preguntas frecuentes con FAQPage schema
- **Blog** (`/blog`) - 12 artículos especializados

### Blog (12 artículos)
1. **Árboles del Faedo de Ciñera** - Especies arbóreas
2. **Bocamina Menos 50** - Patrimonio minero
3. **Cómo llegar al Faedo de Ciñera** - Guía de acceso
4. **Desmán Ibérico** - Fauna protegida
5. **Faedo de Ciñera con niños** - Ruta familiar
6. **Guía ornitológica** - Aves del hayedo
7. **La magia del Faedo** - Experiencia sensorial
8. **Marmitas de Gigante** ⭐ NUEVO - Formaciones geológicas
9. **Mejor época para visitar** - Calendario estacional
10. **Origen del nombre "Faedo"** - Etimología
11. **Qué ver cerca del Faedo** - Rutas alternativas
12. **Senderismo en León** - Contexto regional

## 🗺️ Mapa Interactivo

El mapa utiliza:
- **Capa base**: PNOA Máxima Actualidad (ortofoto del IGN)
- **Capa superpuesta**: IGN Base Orto (nombres y etiquetas)
- **Track GPS**: 108 puntos reales del GPX de la ruta circular (4.5 km)
- **Puntos de interés**: Entrada al Faedo, Corazón del Faedo, Mirador del Beso, Pozo Ibarra

### Características del mapa
- ✅ Zoom interactivo
- ✅ Control de capas
- ✅ Marcadores personalizados
- ✅ Polyline del track GPS
- ✅ Descarga de GPX
- ✅ Responsive (adapta a móvil)

## 🎨 Diseño y Estilo

### Paleta de Colores
```css
/* Primary (Emerald/Verde) */
--color-primary-500: #349981;
--color-primary-700: #225f54;
--color-primary-800: #1f4d44;

/* Tipografía */
--font-heading: 'Wittgenstein', serif;
--font-body: 'Figtree', sans-serif;
--font-size-base: 19px;
```

### Características de diseño
- ✅ **Mobile-first**: Diseño optimizado para móviles
- ✅ **Dark overlay**: Hero con video y overlay oscuro
- ✅ **Smooth scroll**: Navegación fluida
- ✅ **View Transitions**: Animaciones entre páginas
- ✅ **Lazy loading**: Imágenes y videos cargados bajo demanda
- ✅ **Intersection Observer**: Animaciones al scroll

## 🔍 SEO y Schemas

### Schemas implementados
- ✅ **WebSite** - Schema principal del sitio
- ✅ **HikingTrail** - Ruta de senderismo
- ✅ **TouristAttraction** - Atracción turística
- ✅ **BreadcrumbList** - Migas de pan
- ✅ **FAQPage** - Preguntas frecuentes
- ✅ **BlogPosting** - Artículos de blog
- ✅ **LandmarksOrHistoricalBuildings** - Haya Fagus

### Optimizaciones SEO
- ✅ Títulos únicos por página (50-60 caracteres)
- ✅ Meta descriptions únicas (150-160 caracteres)
- ✅ URLs semánticas y limpias
- ✅ Sitemap XML con prioridades
- ✅ Canonical URLs
- ✅ Open Graph completo
- ✅ Twitter Cards
- ✅ Hreflang (es-ES)

## ⚡ Performance

### Optimizaciones aplicadas
- ✅ **Imágenes WebP**: Formato moderno optimizado
- ✅ **Responsive images**: Múltiples tamaños según viewport
- ✅ **Lazy loading**: Carga diferida de imágenes
- ✅ **Google Fonts async**: Carga no bloqueante
- ✅ **Sharp**: Compresión avanzada de imágenes
- ✅ **DNS Prefetch**: Resolución anticipada de dominios
- ✅ **View Transitions**: Navegación instantánea

### Métricas actuales
- 📱 **Mobile**: 75/100 PageSpeed
- 💻 **Desktop**: 90+/100 PageSpeed
- ⚡ **LCP**: ~2.0s
- 🎨 **CLS**: <0.1
- ♿ **Accesibilidad**: 92/100

## 📄 Licencia

Proyecto informativo sin ánimo de lucro sobre el Faedo de Ciñera.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir cambios importantes.

## 📞 Contacto

Para tours guiados al Faedo de Ciñera:
- 📱 WhatsApp: [+34 649 131 791](https://wa.me/34649131791)

---

**Desarrollado con ❤️ para los amantes del senderismo en León**

🌲 **Faedo de Ciñera** - Bosque Mejor Cuidado de España 2007
