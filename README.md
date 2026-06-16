¡Bienvenido al repositorio oficial de **Pizzería Napoli**! 

Este proyecto es una aplicación web e-commerce de una sola página (SPA-like experience) construida con los estándares más modernos de la web. Su objetivo es transmitir la herencia, calidez y excelencia culinaria de una auténtica pizzería napolitana a través de una experiencia digital inmersiva, rápida y altamente optimizada.

---

## 📖 Acerca del Proyecto

La aplicación permite a los usuarios sumergirse en la historia de la pizzería, explorar un menú categorizado dinámicamente y agregar productos a un carrito de compras funcional para realizar pedidos. Todo esto bajo un riguroso sistema de diseño pensado para evocar una velada íntima en una *enoteca* italiana.

---

## 🎨 Sistema de Diseño: "Artisanal Neapolitan"

El proyecto implementa un sistema de diseño propio llamado **Artisanal Neapolitan** ("Estilo Napolitano Artesanal"), basado en un esquema *Dark Mode* que resalta la fotografía de alta calidad.

- **Concepto Visual:** "Modern Tactile". Combina la elegancia de una tipografía de alto contraste con texturas orgánicas, sombras suaves y efectos de desenfoque (*glassmorphism*) que simulan la calidez del horno de leña.
- **Tipografía:**
  - **Titulares:** `EB Garamond`. Aporta un tono clásico, literario e histórico (usado en títulos de secciones y productos).
  - **Cuerpo y UI:** `Work Sans`. Tipografía sans-serif altamente legible para descripciones, precios y botones.
- **Paleta de Colores:**
  - **Fondo (Charcoal/Ink):** Un tono carbón profundo (`#131313`) que sirve de lienzo premium.
  - **Acentos Primarios (Deep Red):** Rojos profundos (`#ffb4a8`) que representan el tomate San Marzano.
  - **Llamados a la Acción (Gold/Amber):** Tonos dorados que imitan el brillo de las brasas para destacar botones como "Añadir al Carrito".
- **Geometría y Elevación:** Uso de bordes redondeados (simulando la masa estirada a mano) y sutiles sombras de caída para separar las "tarjetas" del fondo.

---

## 🏗️ Arquitectura y Tecnologías

El proyecto está construido sobre las siguientes bases técnicas:

### Lenguaje Principal: TypeScript
Todo el código está escrito en **TypeScript** (`.ts`, `.tsx`), lo que proporciona tipado estático, interfaces robustas para los datos del menú (ej. `MenuItem`, `Category`) y previene errores en tiempo de ejecución, facilitando la escalabilidad del proyecto.

### Framework: Next.js 15 (App Router)
Utilizamos **Next.js** en su versión más reciente aprovechando la arquitectura del **App Router** (`app/`). Esto permite un enrutamiento basado en el sistema de archivos, soporte nativo para React Server Components (RSC) y optimización automática de imágenes y fuentes.

### Renderizado de Interfaz: React 19
La UI se construye mediante componentes funcionales y Hooks de **React**. Se fomenta el uso de componentes reutilizables y estado local/global donde es estrictamente necesario.

### Estilos: Tailwind CSS v4
El estilizado está completamente gestionado por **Tailwind CSS**. Hemos personalizado el archivo de configuración para inyectar todas las variables de nuestro sistema de diseño (colores, fuentes, espaciados y elevaciones), permitiendo construir interfaces complejas directamente en el atributo `className`.

### Gestión de Estado: React Context API
Para manejar la lógica del carrito de compras (productos añadidos, cantidades, totales y visibilidad del menú lateral), se ha implementado un gestor de estado global ligero usando la **Context API** nativa de React (`CartProvider` y `useCart` en `CartContext.tsx`).

---

## 🧩 Estructura de Componentes

La interfaz está modularizada en la carpeta `/components`:

- **`NavBar`**: Navegación superior con diseño adhesivo (*sticky*) e indicador de la cantidad de productos en el carrito.
- **`Hero`**: Sección principal de impacto visual al cargar la página.
- **`Features` / `Heritage`**: Secciones informativas sobre la calidad de los ingredientes y la historia de la cocina auténtica.
- **`Menu` & `MenuCard`**: Renderizado dinámico de las categorías y productos leídos desde `/data/menuData.ts`. Incluye navegación por pestañas (*Tabs*).
- **`CartDrawer`**: Un panel lateral deslizable (Off-canvas) que muestra los productos seleccionados, permite editar cantidades y calcula el total de la orden.
- **`Gallery`**: Componente de cuadrícula fotográfica.

---

## 🛒 Funcionalidades Clave

1. **Catálogo Dinámico:** El menú cambia instantáneamente entre categorías (Pizzas, Bebidas, Postres) sin recargar la página.
2. **Carrito de Compras en Tiempo Real:** Los productos se agregan, modifican o eliminan con actualización instantánea del subtotal.
3. **Responsive Design:** La cuadrícula pasa fluidamente de 12 columnas en escritorio (para simular un menú de restaurante físico) a un diseño fluido de 1 columna en móviles.
4. **Animaciones Fluidas:** Uso de utilidades de Tailwind para *fade-ins*, *slide-ins* y efectos *hover* al interactuar con las tarjetas y botones.


The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
