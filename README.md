# 🧠 SUP Soft Skills Lab

> Plataforma web para explorar, organizar y facilitar actividades orientadas al desarrollo de **habilidades blandas aplicadas al contexto tecnológico**.

**SUP Soft Skills Lab** es una aplicación web desarrollada para presentar un catálogo de actividades diseñadas para trabajar competencias como **comunicación efectiva, escucha activa, trabajo en equipo, empatía, pensamiento crítico y resolución colaborativa de problemas**.

El proyecto fue migrado desde una implementación inicial basada en **HTML, CSS y JavaScript imperativo** hacia una arquitectura moderna utilizando **Next.js App Router, React y TypeScript**, buscando mejorar la organización, escalabilidad y mantenibilidad del código.

---

## 🚀 Acceso a la aplicación

La aplicación se encuentra disponible en producción y puede ser utilizada directamente por los **Teaching Assitant (TA)** para consultar y utilizar las actividades.

### 🌐 Aplicación en producción

**👉 https://su-ps-henry2026.vercel.app/**

> **Importante:** No es necesario instalar el proyecto para utilizar la aplicación en producción. Simplemente ingresar al enlace desde el navegador.

---

## 🎯 Objetivo del proyecto

El objetivo del **SUP Soft Skills Lab** es proporcionar un espacio donde docentes y estudiantes puedan acceder a actividades prácticas que permitan desarrollar habilidades interpersonales dentro de contextos relacionados con tecnología.

La aplicación permite:

- 📚 Explorar actividades organizadas por módulos.
- 🔎 Filtrar actividades por módulo y categoría.
- 🧩 Consultar el detalle de cada actividad.
- 👥 Trabajar competencias vinculadas al trabajo colaborativo.
- 💬 Fortalecer la comunicación y la escucha activa.
- 🧠 Desarrollar pensamiento crítico y resolución de problemas.
- 📱 Acceder a la aplicación desde diferentes dispositivos.

---

## 🚀 Características principales

### 📚 Catálogo de actividades

Las actividades se encuentran organizadas por módulos y almacenadas como datos tipados.

Cada actividad puede contener información como:

- Nombre.
- Módulo.
- Categoría.
- Objetivo.
- Duración.
- Cantidad de participantes.
- Materiales.
- Consigna.
- Dinámica.
- Reflexión o cierre.

### 🔎 Sistema de filtros

El catálogo permite filtrar las actividades para encontrar rápidamente propuestas específicas según:

- Módulo.
- Categoría.
- Competencia trabajada.

La lógica de filtrado se encuentra encapsulada en un custom hook para mantener separada la lógica de negocio de la presentación.

### 💬 Detalle de actividades

Cada actividad puede abrirse mediante un diálogo accesible que presenta la información completa sin abandonar la página principal.

### 📱 Diseño responsive

La interfaz está diseñada bajo un enfoque responsive y contempla:

- Desktop.
- Tablet.
- Mobile.

Los componentes y grillas se adaptan automáticamente al tamaño de pantalla.

---

# 🛠️ Stack tecnológico

| Tecnología         | Uso                              |
| ------------------ | -------------------------------- |
| **Next.js 16**     | Framework principal y App Router |
| **React 19**       | Construcción de interfaces       |
| **TypeScript 5**   | Tipado estático                  |
| **Tailwind CSS 4** | Sistema de estilos               |
| **ESLint 9**       | Análisis y calidad de código     |
| **DM Sans + Syne** | Tipografías                      |

### Arquitectura

La aplicación utiliza principalmente **React Server Components**, incorporando Client Components únicamente en las partes que requieren interacción del navegador.

No requiere:

- Backend.
- Base de datos.
- API externa.
- Autenticación.
- Persistencia.

Los contenidos actuales se encuentran definidos como **datos estáticos tipados** dentro de `src/data`.

---

# 📂 Arquitectura del proyecto

```text
src/

│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── activities/
│   │   ├── ActivitiesSection.tsx
│   │   ├── ActivityCard.tsx
│   │   ├── ActivityDialog.tsx
│   │   ├── ActivityFilters.tsx
│   │   └── ActivityGrid.tsx
│   │
│   ├── layout/
│   │   ├── SiteFooter.tsx
│   │   └── SiteHeader.tsx
│   │
│   └── sections/
│       ├── FacilitationSection.tsx
│       ├── HeroSection.tsx
│       ├── ModelSection.tsx
│       └── PurposeSection.tsx
│
├── data/
│   ├── activity-filters.ts
│   └── activities/
│       ├── index.ts
│       ├── module-1.ts
│       ├── module-2.ts
│       ├── module-3.ts
│       ├── module-4.ts
│       └── module-5.ts
│
├── hooks/
│   └── useActivityFilters.ts
│
├── lib/
│   └── activity-utils.ts
│
└── types/
    └── activity.ts
```

---

# 🧩 Responsabilidad de cada capa

## `app/`

Contiene la configuración principal del **Next.js App Router**.

### `page.tsx`

Actúa como punto de composición de la página principal.

Su responsabilidad es organizar las diferentes secciones, evitando concentrar lógica de negocio o grandes cantidades de JSX.

### `layout.tsx`

Define el layout raíz, metadata y configuración global de la aplicación.

### `globals.css`

Contiene:

- Variables visuales.
- Estilos globales.
- Responsive.
- Tipografía.
- Reglas de accesibilidad visual.

---

## `components/`

Contiene los componentes reutilizables de la interfaz.

### `components/layout/`

Componentes estructurales:

- `SiteHeader`
- `SiteFooter`

### `components/sections/`

Secciones principales de la landing:

- `HeroSection`
- `PurposeSection`
- `ModelSection`
- `FacilitationSection`

Cada sección mantiene una responsabilidad visual específica.

### `components/activities/`

Contiene todo lo relacionado con el catálogo:

```text
ActivitiesSection
       │
       ├── ActivityFilters
       │
       └── ActivityGrid
              │
              └── ActivityCard
                     │
                     └── ActivityDialog
```

---

# 🧠 Gestión del estado

La lógica de filtrado se encuentra encapsulada en:

```text
src/hooks/useActivityFilters.ts
```

Esto permite separar:

```text
Interfaz
   ↓
Hook
   ↓
Lógica de filtrado
   ↓
Datos
```

Los componentes visuales no necesitan conocer los detalles internos de cómo se calculan los resultados.

---

# 📚 Organización de los datos

Las actividades están separadas por módulo:

```text
src/data/activities/

├── module-1.ts
├── module-2.ts
├── module-3.ts
├── module-4.ts
└── module-5.ts
```

La exportación centralizada se encuentra en:

```text
src/data/activities/index.ts
```

Esto permite que el resto de la aplicación consuma las actividades desde un único punto.

---

# 🔄 Flujo de datos

El flujo principal del catálogo es:

```text
┌─────────────────────┐
│   Datos estáticos   │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│     module-*.ts     │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│  activities/index   │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│  ActivitiesSection  │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ useActivityFilters  │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│    ActivityGrid     │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│    ActivityCard     │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│   ActivityDialog    │
└─────────────────────┘
```

React administra el estado y el renderizado de la interfaz, sin necesidad de manipulación directa del DOM.

---

# 🎨 Identidad visual

La interfaz utiliza una identidad visual minimalista basada principalmente en:

| Color          | Hexadecimal | Uso                            |
| -------------- | ----------- | ------------------------------ |
| Negro          | `#000000`   | Fondos y elementos principales |
| Blanco         | `#FFFFFF`   | Superficies y texto            |
| Amarillo       | `#FFFF05`   | Acciones y destacados          |
| Amarillo suave | `#FFFFB8`   | Elementos secundarios          |
| Gris           | `#5F6368`   | Texto secundario               |
| Gris claro     | `#E5E5E5`   | Bordes                         |

El amarillo funciona como color de énfasis para:

- Acciones.
- Estados activos.
- Badges.
- Elementos destacados.
- Indicadores visuales.

---

# ♿ Accesibilidad

La aplicación incorpora prácticas básicas de accesibilidad:

- HTML semántico.
- Navegación mediante teclado.
- Soporte para cierre de diálogos mediante `Escape`.
- `aria-live` para comunicar cambios en los resultados.
- `aria-pressed` para indicar filtros activos.
- Diálogos accesibles.
- Clase `sr-only` para contenido destinado a lectores de pantalla.
- Contraste visual en elementos principales.

La accesibilidad se considera parte de la implementación y no únicamente una capa visual posterior.

---

# 💻 Requisitos

Para ejecutar el proyecto localmente se recomienda:

- **Node.js 20+**
- npm, pnpm, yarn o bun.

---

# ⚙️ Instalación

Clonar el repositorio:

```bash
git clone https://github.com/CarolinaAriza-mind/SUPs-Henry2026.git
```

Ingresar al proyecto:

```bash
cd SUPs-Henry2026
```

Instalar dependencias:

```bash
npm install
```

También es posible utilizar pnpm:

```bash
pnpm install
```

---

# ▶️ Desarrollo

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:3000
```

---

# 📦 Build de producción

Generar el build:

```bash
npm run build
```

Iniciar la aplicación en modo producción:

```bash
npm run start
```

---

# 🔍 Lint

Ejecutar ESLint:

```bash
npm run lint
```

---

# ➕ Agregar una nueva actividad

Para agregar una actividad a un módulo existente, editar el archivo correspondiente:

```text
src/data/activities/
```

Por ejemplo:

```text
src/data/activities/module-3.ts
```

La nueva actividad debe respetar el tipo definido en:

```text
src/types/activity.ts
```

Una actividad estándar puede incorporarse sin modificar:

```text
ActivityCard
ActivityGrid
ActivityDialog
```

Esto permite mantener la UI desacoplada de los contenidos.

---

# 🧱 Agregar un nuevo módulo

Si el proyecto incorpora un nuevo módulo:

### 1. Crear el archivo

```text
src/data/activities/module-6.ts
```

### 2. Definir las actividades

Utilizando el tipo:

```text
Activity
```

### 3. Exportar el módulo

Actualizar:

```text
src/data/activities/index.ts
```

### 4. Actualizar los filtros

Si corresponde, agregar el nuevo módulo en:

```text
src/data/activity-filters.ts
```

### 5. Verificar la interfaz

Comprobar que:

- El módulo aparezca en los filtros.
- Las actividades se rendericen correctamente.
- El diálogo muestre la información completa.
- La interfaz siga funcionando correctamente en mobile.

---

# 🧭 Principios de arquitectura

El proyecto busca mantener una arquitectura simple y escalable.

### Separación de responsabilidades

```text
UI              → components/
Páginas         → app/
Estado / lógica → hooks/
Datos           → data/
Tipos           → types/
Utilidades      → lib/
Estilos         → app/globals.css
```

### Reglas principales

- Evitar concentrar toda la UI en `page.tsx`.
- Evitar componentes excesivamente grandes.
- Mantener los datos separados de la presentación.
- Evitar manipulación directa del DOM.
- Reutilizar lógica mediante hooks y utilidades.
- Mantener los modelos de datos en `types`.
- Preferir componentes pequeños y composables.
- Utilizar Server Components cuando no sea necesaria interacción del navegador.
- Utilizar Client Components únicamente donde exista una necesidad real de estado o interacción.

---

# 🔄 Migración tecnológica

El proyecto nació a partir de una implementación basada principalmente en:

```text
HTML
CSS
JavaScript imperativo
```

La nueva implementación utiliza:

```text
Next.js
   +
React
   +
TypeScript
```

La migración permitió pasar de una estructura más monolítica hacia una arquitectura basada en responsabilidades.

### Antes

```text
HTML
 │
 └── JavaScript
        │
        └── Manipulación directa del DOM
```

### Ahora

```text
Next.js App Router
        │
        ├── Pages
        ├── Components
        ├── Hooks
        ├── Data
        ├── Types
        └── Utilities
```

El resultado facilita:

- Mantenimiento.
- Reutilización.
- Escalabilidad.
- Tipado.
- Incorporación de nuevas actividades.
- Evolución futura del proyecto.

---

# 🔮 Próximos pasos

Actualmente, **SUP Soft Skills Lab** funciona como una **landing/catalogue frontend estática**.

La arquitectura permite incorporar futuras funcionalidades sin modificar la estructura principal.

Algunas posibles evoluciones:

```text
Backend
   ↓
API
   ↓
Base de datos
   ↓
Gestión dinámica de actividades
```

Por ejemplo:

- Panel de administración.
- CRUD de actividades.
- Persistencia de datos.
- Autenticación.
- Gestión de usuarios.
- Actividades favoritas.
- Búsqueda avanzada.
- Seguimiento de actividades realizadas.
- Métricas de participación.
- Integración con una API.

En ese escenario podrían incorporarse nuevas capas como:

```text
src/

├── services/
├── api/
└── schemas/
```

sin necesidad de modificar la estructura fundamental de componentes, hooks, datos y tipos.

---

# 📌 Estado actual

| Característica                          | Estado |
| --------------------------------------- | ------ |
| Landing page                            | ✅     |
| Catálogo de actividades                 | ✅     |
| Organización por módulos                | ✅     |
| Filtros                                 | ✅     |
| Detalle de actividades                  | ✅     |
| Diseño responsive                       | ✅     |
| Accesibilidad básica                    | ✅     |
| **Aplicación disponible en producción** | **✅** |
| Backend                                 | —      |
| Base de datos                           | —      |
| Autenticación                           | —      |
| Persistencia                            | —      |

**Tipo:** Frontend / Web Application

**Arquitectura:** Next.js App Router

**Renderizado:** Static / Server Components + Client Components donde corresponde

**Producción:** https://su-ps-henry2026.vercel.app/

---

# 👩‍💻 Autora

**Carolina Ariza**

Proyecto desarrollado como parte del trabajo sobre **Soft Skills aplicadas al aprendizaje y desarrollo en tecnología**.

---

## 📄 Licencia

Este proyecto es de uso educativo y forma parte del desarrollo del **SUP Soft Skills Lab**.
