# Documentación Diseño - RESACA WEB

## 1. Configuración Base de Tailwind
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- Importaciones necesarias para utilizar Tailwind CSS
- El fondo negro se aplica globalmente mediante `@layer base`

## 2. Estructura y Clases Principales

### Layout Base
- `min-h-screen`: Altura mínima 100vh
- `bg-black`: Fondo negro
- `text-green-400`: Texto verde neón
- `font-mono`: Tipografía monoespaciada

### Efecto Matrix
- `fixed inset-0`: Posicionamiento fijo cubriendo toda la pantalla
- `pointer-events-none`: Permite interactuar con elementos debajo
- `opacity-20`: Transparencia del 20%
- `mix-blend-overlay`: Mezcla visual con el fondo
- `bg-cover`: Imagen de fondo cubriendo todo el espacio

### Sistema de Grid
- `container mx-auto`: Contenedor centrado con márgenes automáticos
- `grid md:grid-cols-3`: Grid de 3 columnas en pantallas medianas
- `gap-8`: Espacio entre elementos del grid

### Cards Interactivas
- `bg-black/50`: Fondo negro con 50% de opacidad
- `border border-green-500`: Borde verde
- `hover:border-purple-500`: Borde púrpura al hover
- `transition-all`: Animaciones suaves
- `group`: Permite efectos hover en elementos hijos

### Efectos de Texto
- Efecto Glitch:
  ```css
  .glitch-text {
    text-shadow: /* Sombras RGB para efecto glitch */
    animation: glitch 500ms infinite;
  }
  ```
- Animación definida con `@keyframes glitch`
- `animate-bounce`: Animación de rebote en el ícono principal

### Sistema de Colores
- Principal: Verde (`text-green-400`)
- Secundario: Púrpura (`text-purple-400`, `border-purple-500`)
- Textos secundarios: Gris (`text-gray-400`, `text-gray-500`)

### Responsive Design
- `md:grid-cols-3`: Grid de 3 columnas en pantallas medianas
- `px-4`: Padding horizontal responsivo
- `py-20`: Padding vertical grande para secciones principales

### Interactividad
- `hover:text-purple-400`: Cambio de color al hover
- `transition-colors`: Transiciones suaves de color
- `cursor-help`: Cursor especial para el easter egg
- `group-hover:block`: Mostrar elementos al hover del grupo

## 3. Componentes Especializados

### Sección Hero
- Centrado vertical y horizontal con `flex flex-col items-center`
- Espaciado con `space-y-6`
- Posicionamiento relativo para íconos superpuestos

### Sección de Contacto
- `max-w-2xl`: Ancho máximo controlado
- `bg-black/70`: Fondo negro semi-transparente
- Íconos sociales con efectos hover

### Footer
- Diseño minimalista con `text-center`
- Texto pequeño con `text-sm`
- Color gris para menor énfasis