# 🌿 Quinta Don Julio — Sitio Web One-Page para Alquiler de Quinta para Eventos

> *"Tu evento soñado empieza aquí."*

Sitio web **responsive** de tipo **One-Page** desarrollado con **HTML5 semántico**, **CSS3** y **Bootstrap 5.3**, diseñado bajo una estética **Cottagecore** para promocionar el alquiler de una quinta para eventos sociales y corporativos.

El proyecto fue construido sin frameworks de JavaScript (React, Vue, Angular), priorizando la **accesibilidad web (WCAG)**, la **usabilidad** y una experiencia visual inmersiva que transmite la calidez y naturaleza del lugar.

---

## 📋 Tabla de Contenidos

- [Objetivo del Proyecto](#-objetivo-del-proyecto)
- [Fundamentos de UX/UI y Diseño](#-fundamentos-de-uxui-y-diseño)
  - [Paleta de Colores](#paleta-de-colores-cottagecore)
  - [Tipografía](#tipografía-google-fonts)
- [Benchmarking — Análisis de Competencia](#-benchmarking--análisis-de-competencia)
- [Arquetipo de Persona (User Persona)](#-arquetipo-de-persona-user-persona)
- [Arquitectura de la Información](#-arquitectura-de-la-información)
- [Leyes de UX Aplicadas](#-leyes-de-ux-aplicadas)
- [Accesibilidad Web](#-accesibilidad-web-wcag)
- [Estructura del Formulario](#-estructura-del-formulario)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura de Archivos](#-estructura-de-archivos)

---

## 🎯 Objetivo del Proyecto

Diseñar y desarrollar un sitio web **One-Page responsive** para **Quinta Don Julio**, un espacio de alquiler para eventos ubicado en la zona norte de Buenos Aires, Argentina.

El sitio busca:

- **Vender la experiencia** de celebrar un evento rodeado de naturaleza, a través de un diseño visual inmersivo con estética *cottagecore*.
- **Facilitar el contacto directo** entre el cliente y el dueño de la quinta mediante un formulario de contacto simple, accesible y sin intermediarios.
- **Cumplir con estándares de accesibilidad** para que personas con discapacidad visual o motriz puedan navegar y utilizar el sitio sin barreras.

---

## 🎨 Fundamentos de UX/UI y Diseño

### Paleta de Colores (Cottagecore)

El estilo **cottagecore** se basa en la tierra, la vegetación y la calidez del hogar. Se seleccionaron colores que transmiten **paz, naturaleza y exclusividad**, adecuados para un sitio de eventos.

| Color | Código HEX | Muestra | Uso |
|:------|:----------:|:-------:|:----|
| **Verde Oliva / Musgo** | `#4A5D4E` | 🟢 | Color principal. Headers, botones principales y fondos de sección. Transmite naturaleza, jardín y calma. |
| **Blanco Cálido / Crema** | `#FDFBF7` | ⬜ | Fondo principal del sitio. Evita el blanco puro para una sensación más rústica y suave a la vista. |
| **Marrón Terracota / Madera** | `#A3704C` | 🟤 | Color de acento para detalles, íconos, bordes y estados `:focus`. Evoca lo rústico y la madera de la quinta. |
| **Texto Principal** | `#2F3E33` | ⬛ | Verde texturado casi negro. Garantiza un contraste alto y legible sobre el fondo crema. |

### Tipografía (Google Fonts)

Se eligieron dos familias tipográficas con criterios de legibilidad y coherencia estética:

| Rol | Fuente | Tipo | Fundamento |
|:----|:-------|:-----|:-----------|
| **Títulos** (H1, H2, H3) | **Playfair Display** | Serif | Elegante y clásica. Evoca lo campestre y la naturaleza, aportando personalidad a los encabezados. |
| **Cuerpo de texto** | **Montserrat** | Sans-serif | Limpia y moderna. Asegura una lectura perfecta en párrafos largos y tamaños pequeños. |

---

## 📊 Benchmarking — Análisis de Competencia

Se analizaron dos tipos de competidores directos e indirectos para identificar oportunidades de diferenciación:

### Competidor 1: Páginas web de quintas tradicionales

| Aspecto | Observación |
|:--------|:------------|
| Diseño visual | Obsoleto, sin identidad visual clara |
| Tipografía | Genérica (Arial, Times New Roman) |
| Contenido | Exceso de texto, sin jerarquía |
| Formularios | Complejos y extensos, ahuyentan al cliente |
| Responsive | La mayoría **no** son adaptables a móviles |

### Competidor 2: Plataformas de reservas (Airbnb, Booking)

| Aspecto | Observación |
|:--------|:------------|
| UX/UI | Excelente experiencia de usuario |
| Contacto | El usuario **pierde el contacto directo** con el dueño |
| Costos | Se cobran **comisiones altas** al propietario |
| Personalización | La quinta se muestra como un listado más, sin identidad propia |

### ✅ Oportunidad identificada para Quinta Don Julio

Crear una experiencia **visualmente inmersiva** con estilo *cottagecore* que venda la **experiencia** de estar en la quinta (no solo el lugar), facilitando el **contacto directo** mediante un formulario simple y accesible, sin intermediarios ni comisiones.

---

## 👤 Arquetipo de Persona (User Persona)

Se definió un arquetipo de persona representativo del público objetivo del sitio:

| Dato | Detalle |
|:-----|:--------|
| **Nombre** | Sofía Martínez |
| **Edad** | 32 años |
| **Ocupación** | Diseñadora Gráfica y organizadora de eventos freelance |
| **Ubicación** | Buenos Aires, Argentina |

### Necesidad
Busca un lugar **al aire libre**, estético y rodeado de naturaleza para celebrar el **bautismo de su hijo** y un **cumpleaños familiar íntimo**. Valora la estética del espacio porque necesita que las fotos del evento queden hermosas sin demasiada producción.

### Frustraciones
- Páginas web que **no muestran claramente los servicios** incluidos en el alquiler.
- **Fotos de mala calidad** que no permiten hacerse una idea real del espacio.
- La **dificultad para saber la disponibilidad** de fechas sin tener que llamar por teléfono.
- Formularios de contacto extensos que piden demasiada información.

### ¿Cómo responde nuestro sitio?
- Tarjetas con **fotos descriptivas** de cada espacio (pileta, quincho, parque, salón).
- Formulario de contacto **simple (4-5 campos)** con selector de fecha incluido.
- Diseño *cottagecore* que **transmite la experiencia** visual del lugar.
- Toda la información accesible en un **scroll continuo** (One-Page).

---

## 🏗️ Arquitectura de la Información

El sitio se organiza como una **Single Page Application (One-Page)** con 5 secciones principales accesibles desde un menú de navegación fijo (`position: fixed`):

```
┌─────────────────────────────────────────────┐
│  NAVBAR (fija)                              │
│  Logo a la izquierda │ Enlaces a la derecha │
│  Inicio · La Quinta · Servicios · Contacto  │
├─────────────────────────────────────────────┤
│                                             │
│  HERO SECTION                               │
│  Imagen de fondo + Frase inspiradora        │
│  + Botón CTA → "Reservá tu fecha"           │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  NUESTRA HISTORIA                           │
│  Texto emotivo sobre la quinta              │
│  Transmite calidez familiar                 │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  LA QUINTA (Galería / Servicios)            │
│  Grid de tarjetas con imágenes:             │
│  Pileta · Parque · Quincho · Salón          │
│  Jardín de Ceremonias · Estacionamiento     │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  SERVICIOS                                  │
│  Sonido/DJ · Catering · Decoración · Foto   │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  FORMULARIO DE CONTACTO                     │
│  Nombre · Email · Fecha · Tipo de Evento    │
│  + Campos opcionales + Botón de envío       │
│                                             │
├─────────────────────────────────────────────┤
│  FOOTER                                     │
│  Datos de contacto · Enlaces · Redes        │
└─────────────────────────────────────────────┘
```

**Fundamento:** La estructura One-Page permite al usuario recorrer toda la información con un scroll natural, sin perder el contexto ni navegar entre múltiples páginas. El menú fijo permite saltar a cualquier sección en todo momento.

---

## ⚖️ Leyes de UX Aplicadas

### 1. Ley de Hick (Ley de Hick-Hyman)

> *"El tiempo que toma tomar una decisión aumenta con la cantidad de opciones disponibles."*

**Aplicación:** El formulario de contacto se mantiene en un **mínimo de 4-5 campos esenciales** (Nombre, Email, Fecha, Tipo de Evento) para que el usuario no se abrume y complete la acción rápidamente. Se evitaron campos innecesarios que generen fricción.

### 2. Ley de Jakob (Ley de la Experiencia del Usuario de Jakob)

> *"Los usuarios pasan la mayor parte de su tiempo en otros sitios, por lo que prefieren que tu sitio funcione igual que los demás."*

**Aplicación:** El **menú de navegación está arriba** y el **formulario de contacto al final**, tal como el usuario espera que funcione cualquier sitio web convencional. No se reinventa la estructura, sino que se respetan los patrones mentales del usuario.

### 3. Ley de la Proximidad (Gestalt)

> *"Los elementos que están cerca unos de otros tienden a percibirse como un grupo o unidad."*

**Aplicación:** Los elementos relacionados (por ejemplo, la **foto de la pileta + el texto descriptivo de la pileta**) están agrupados dentro de **tarjetas (cards)** de Bootstrap para que se perciban como una unidad coherente. El usuario entiende instantáneamente que la imagen y el texto pertenecen al mismo espacio.

---

## ♿ Accesibilidad Web (WCAG)

El sitio fue desarrollado con foco en accesibilidad para personas con **discapacidad visual** o **movilidad reducida**, siguiendo las pautas **WCAG 2.1**:

### Contraste Alto
El texto oscuro (`#2F3E33`) sobre el fondo crema (`#FDFBF7`) cumple con las **normativas WCAG AA** de ratio de contraste mínimo, garantizando una lectura cómoda incluso para personas con baja visión.

### Lectores de Pantalla
- Uso estricto de **etiquetas semánticas** HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Atributos **`alt`** descriptivos en cada imagen (ej: `alt="Parque principal de la quinta con arboleda y sombra para eventos"`).
- Atributos **`aria-label`** y **`aria-labelledby`** en la navegación, formulario y enlaces de redes sociales.
- **Skip link** ("Saltar al contenido principal") para que los usuarios de lectores de pantalla no tengan que recorrer el menú en cada visita.

### Navegación por Teclado
- Pseudo-clase **`:focus-visible`** con un borde grueso y visible en color **terracota** (`#A3704C`) en botones, enlaces y campos del formulario.
- Todos los elementos interactivos son alcanzables con la tecla `Tab`.
- Los iconos de redes sociales en el footer tienen un **área táctil mínima de 44×44px** (estándar WCAG).

### Formulario Accesible
- Cada `<input>` tiene su respectiva etiqueta `<label>` **vinculada por atributo `for`/`id`**, facilitando la lectura a softwares de voz.
- Atributos **`aria-required`** en campos obligatorios.
- Atributos **`autocomplete`** para que los navegadores puedan autocompletar datos del usuario.
- Textos de ayuda vinculados con **`aria-describedby`**.

### Respeto por preferencias del usuario
- Se implementó la media query **`prefers-reduced-motion: reduce`** para desactivar todas las animaciones y transiciones si el usuario lo tiene configurado en su sistema operativo.

---

## 📝 Estructura del Formulario

Para cumplir con el requisito de **al menos 4 campos** y simular la funcionalidad de reserva, el formulario incluye:

| # | Campo | Tipo HTML | Requerido | Descripción |
|:-:|:------|:----------|:---------:|:------------|
| 1 | Nombre Completo | `type="text"` | ✅ Sí | Nombre del cliente para personalizar la comunicación |
| 2 | Correo Electrónico | `type="email"` | ✅ Sí | Email para responder la consulta |
| 3 | Teléfono de Contacto | `type="tel"` | ❌ No | Canal alternativo de comunicación (opcional) |
| 4 | Fecha del Evento | `type="date"` | ✅ Sí | Simula un calendario de disponibilidad |
| 5 | Tipo de Evento | `<select>` | ✅ Sí | Opciones: Casamiento, Cumpleaños, Bautismo, Comunión, Corporativo, Reunión familiar, Otro |
| 6 | Cantidad de Invitados | `type="number"` | ❌ No | Para dimensionar el espacio necesario |
| 7 | Mensaje Adicional | `<textarea>` | ❌ No | Espacio libre para consultas o detalles del evento |

**Botón de envío:** `type="submit"` que al hacer click emula el éxito del envío del formulario.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|:-----------|:--------|:----|
| **HTML5** | — | Estructura semántica del sitio |
| **CSS3** | — | Estilos personalizados, animaciones, responsive design |
| **Bootstrap** | 5.3.3 | Sistema de grillas, componentes base (navbar, cards, forms) |
| **Bootstrap Icons** | 1.11.3 | Iconografía (redes sociales, servicios, formulario) |
| **Google Fonts** | — | Playfair Display (títulos) + Montserrat (cuerpo) |

> **Nota:** No se utilizan frameworks de JavaScript (React, Vue, Angular). El sitio funciona exclusivamente con HTML, CSS y el JS mínimo de Bootstrap para el menú responsive.

---

## 📁 Estructura de Archivos

```
Quinta_Don_Julio/
├── index.html              # Página principal (One-Page)
├── README.md               # Documentación del proyecto
├── css/
│   └── styles.css          # Estilos personalizados (tema Cottagecore)
└── img/
    ├── pileta.png           # Imagen de la pileta
    ├── parque.png           # Imagen del parque
    ├── quincho.png          # Imagen del quincho
    ├── salon.png            # Imagen del salón interior
    ├── jardin-ceremonias.png # Imagen del jardín de ceremonias
    └── estacionamiento.png  # Imagen del estacionamiento
```

---

## 👥 Autores

- **Mirko Alvarez**

---

<p align="center">
  🌿 Hecho con dedicación para <strong>Quinta Don Julio</strong> 🌿
</p>
