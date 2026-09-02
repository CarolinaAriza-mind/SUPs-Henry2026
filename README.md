# SUP Soft Skills Lab

Aplicación web desarrollada con **Next.js, React y TypeScript** para presentar y explorar el catálogo de actividades del **SUP Soft Skills Lab**.

La aplicación fue migrada desde una implementación basada en HTML, CSS y JavaScript imperativo hacia una arquitectura modular con **Next.js App Router**, componentes React reutilizables y datos tipados.

## Objetivos

- Presentar el propósito y modelo del programa.
- Mostrar las actividades organizadas por módulos.
- Permitir filtrar actividades por módulo y categoría.
- Consultar el detalle de cada actividad mediante un diálogo/modal.
- Mantener una interfaz responsive y accesible.
- Separar presentación, lógica, datos y tipos para facilitar el mantenimiento.

## Stack tecnológico

- **Next.js 16** — App Router.
- **React 19** — construcción de la interfaz.
- **TypeScript 5** — tipado estático.
- **CSS** — estilos globales y responsive.
- **DM Sans + Syne** — tipografías.

No requiere backend ni base de datos: el contenido de las actividades está definido como datos estáticos tipados dentro de `src/data`.

## Requisitos

- Node.js 20 o superior recomendado.
- npm, pnpm, yarn o bun.

## Instalación

Clonar o descargar el proyecto y ejecutar:

```bash
npm install
```

También se puede utilizar pnpm:

```bash
pnpm install
```

## Desarrollo

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Luego abrir:

```text
http://localhost:3000
```

## Build de producción

Generar el build:

```bash
npm run build
```

Iniciar la aplicación en producción:

```bash
npm run start
```

## Lint

Ejecutar ESLint:

```bash
npm run lint
```

## Arquitectura

La aplicación utiliza **Next.js App Router** y está organizada por responsabilidades.

```text
src/
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

## Responsabilidades

### `app/`

Contiene la configuración principal del App Router.

- `page.tsx`: composición de la página principal. No concentra lógica de negocio ni renderizado complejo.
- `layout.tsx`: layout raíz y metadata.
- `globals.css`: estilos globales, variables de diseño y responsive.

### `components/layout/`

Componentes estructurales reutilizables:

- Header.
- Footer.

### `components/sections/`

Cada sección visual de la landing se encuentra aislada en su propio componente.

Esto evita tener un `page.tsx` con cientos de líneas de JSX.

### `components/activities/`

Contiene todo lo relacionado con el catálogo de actividades:

- `ActivitiesSection`: orquesta filtros, listado y modal.
- `ActivityFilters`: filtros de búsqueda.
- `ActivityGrid`: render del listado.
- `ActivityCard`: representación individual de una actividad.
- `ActivityDialog`: detalle completo de una actividad.

### `hooks/`

`useActivityFilters.ts` encapsula el estado y la lógica de filtrado.

De esta manera, los componentes visuales no necesitan conocer cómo se calculan los resultados.

### `data/`

Los datos están separados de la UI.

Las actividades están divididas por módulo:

```text
module-1.ts
module-2.ts
module-3.ts
module-4.ts
module-5.ts
```

`data/activities/index.ts` centraliza la exportación para que el resto de la aplicación pueda consumirlas desde un único punto.

### `types/`

`activity.ts` contiene los tipos TypeScript utilizados para representar las actividades y sus propiedades.

### `lib/`

Contiene funciones auxiliares que no pertenecen a un componente específico.

## Flujo de datos

El flujo principal de actividades es:

```text
Datos estáticos
     ↓
module-*.ts
     ↓
activities/index.ts
     ↓
ActivitiesSection
     ↓
useActivityFilters
     ↓
ActivityGrid
     ↓
ActivityCard
     ↓
ActivityDialog
```

La UI no modifica directamente el DOM. React administra el renderizado y el estado de la interfaz.

## Diseño

La interfaz utiliza una identidad visual basada en:

- Negro: `#000000`
- Blanco: `#FFFFFF`
- Amarillo principal: `#FFFF05`
- Amarillo suave: `#FFFFB8`
- Texto secundario: `#5F6368`
- Bordes: `#E5E5E5`

El amarillo se utiliza principalmente para acciones, elementos destacados, badges y estados activos.

## Responsive

La interfaz contempla tres escenarios principales:

- Desktop.
- Tablet.
- Mobile.

Los grids se adaptan automáticamente y el menú de navegación se simplifica en resoluciones pequeñas.

## Accesibilidad

Se contemplan prácticas básicas de accesibilidad:

- Elementos semánticos HTML.
- `aria-live` para actualización de resultados.
- `aria-pressed` para filtros activos.
- Diálogo accesible para el detalle de actividades.
- Cierre mediante Escape.
- Clase `sr-only` para contenido accesible para lectores de pantalla.
- Navegación mediante teclado.

## Agregar una nueva actividad

Para agregar una actividad existente a un módulo, editar el archivo correspondiente dentro de:

```text
src/data/activities/
```

Por ejemplo:

```text
src/data/activities/module-3.ts
```

La actividad debe respetar el tipo definido en:

```text
src/types/activity.ts
```

No es necesario modificar `ActivityCard`, `ActivityGrid` ni `ActivityDialog` para agregar una actividad estándar.

## Agregar un nuevo módulo

Si se incorpora un módulo nuevo:

1. Crear `module-6.ts` dentro de `src/data/activities/`.
2. Definir las actividades utilizando el tipo `Activity`.
3. Exportar el módulo desde `src/data/activities/index.ts`.
4. Agregar el filtro correspondiente en `src/data/activity-filters.ts` si aplica.
5. Verificar la presentación del nuevo módulo en los filtros y cards.

## Principios de mantenimiento

La aplicación debe mantener las siguientes reglas:

- No colocar toda la UI en `page.tsx`.
- No crear componentes de cientos de líneas cuando puedan dividirse por responsabilidad.
- No mezclar datos estáticos con JSX si pueden mantenerse en `src/data`.
- No manipular el DOM directamente con `querySelector`, `innerHTML` o `getElementById`.
- Mantener la lógica reutilizable en hooks o funciones de `lib`.
- Mantener los modelos de datos en `types`.
- Preferir componentes pequeños y composables.
- Mantener Server Components cuando no se necesita estado o interacción del navegador.
- Usar Client Components únicamente donde existe interacción.

## Migración realizada

La versión original estaba basada principalmente en JavaScript imperativo y concentraba gran parte de la lógica en archivos extensos.

La migración a Next.js separa las responsabilidades en:

```text
UI              → components/
Páginas         → app/
Estado/Lógica   → hooks/
Datos           → data/
Tipos           → types/
Utilidades      → lib/
Estilos         → app/globals.css
```

El resultado permite continuar ampliando la aplicación sin convertir nuevamente la página principal o un único archivo de datos en archivos monolíticos.

## Estado actual

La aplicación es una **landing/catalogue frontend estática**, sin autenticación, API ni persistencia de datos.

Las futuras integraciones pueden incorporarse sin modificar la estructura base, agregando por ejemplo:

```text
src/
├── services/
├── api/
└── schemas/
```

si posteriormente las actividades o contenidos pasan a ser administrados desde un backend.
