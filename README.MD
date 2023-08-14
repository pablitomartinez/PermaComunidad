# Proyecto PermaComunidad

## ¡Bienvenido a PermaComunidad!

### Acerca de mí

Soy Pablo, un entusiasta de la agroecología y la permacultura, también estudiante de Trabajo Social en UNJU. Aquí combino mi pasión por la naturaleza con la programación para crear proyectos impactantes y sostenibles.

### Proyectos Destacados

#### [Proyecto 1: EcoCultivo Comunitario](/projects/proyecto-1)

¡Descubre cómo creamos un cultivo comunitario en armonía con la naturaleza y la comunidad!

#### [Proyecto 2: Biodiversidad Urbana](/projects/proyecto-2)

Explora cómo creamos espacios verdes en la ciudad para promover la biodiversidad y el bienestar.

### Blog y Recursos

Visita mi [blog](/blog) para aprender más sobre agroecología, permacultura y cómo integro estas ideas en mis proyectos.

### Cursos y Talleres

¡Participa en mis cursos en línea y talleres presenciales! Mantente al tanto de los próximos eventos en el [calendario](/courses).

### Galería Visual

Echa un vistazo a nuestras fotos y videos de proyectos anteriores en nuestra [galería](/gallery).

### Contacto

¿Quieres saber más o colaborar en proyectos? ¡Contáctame en [contacto@agroecoweb.com](mailto:contacto@agroecoweb.com)!

# Tecnologías Utilizadas en AgroEcoWeb

En AgroEcoWeb, estamos utilizando una combinación de tecnologías para crear un sitio web que fusiona la agroecología, la permacultura, la programación y el trabajo social.

## React

Estamos construyendo nuestra aplicación utilizando [React](https://reactjs.org/), un popular marco de trabajo de JavaScript para construir interfaces de usuario interactivas y reutilizables. React nos permite dividir nuestra aplicación en componentes reutilizables y crear una experiencia de usuario dinámica.

## Chakra UI

Para el diseño y los componentes de interfaz, estamos utilizando [Chakra UI](https://chakra-ui.com/), un kit de herramientas de diseño de interfaz de usuario que nos permite crear componentes estilizados y funcionales de manera eficiente. Chakra UI nos ayuda a mantener un aspecto coherente y atractivo en toda la aplicación.

## Markdown

Estamos utilizando [Markdown](https://www.markdownguide.org/) para dar formato a la estructura de contenido y las descripciones en nuestro sitio web. Markdown es una sintaxis sencilla que nos permite escribir contenido de manera legible y fácil de entender, mientras mantenemos una presentación clara.

## React Router

Hemos incorporado [React Router](https://reactrouter.com/) para gestionar la navegación en nuestra aplicación. Con React Router, podemos definir rutas para diferentes páginas y asegurarnos de que los usuarios puedan moverse por nuestro sitio de manera fluida.

## CSS y Estilos Globales

Estamos utilizando CSS para agregar estilos personalizados a nuestra aplicación. Además, hemos creado estilos globales para establecer un diseño y aspecto coherentes en toda la aplicación, lo que contribuye a una experiencia de usuario más consistente.

## Imágenes y Recursos

Hemos incluido imágenes y otros recursos visuales para enriquecer nuestro contenido. Almacenamos estas imágenes en la carpeta `assets/images/` para acceder a ellas fácilmente en nuestros componentes.

---

¡Estamos emocionados por la combinación de estas tecnologías para crear un sitio web único que refleje nuestra pasión por la agroecología, la permacultura y la programación! Si tienes más preguntas sobre las tecnologías o su implementación, no dudes en preguntar.



# Estructura de Carpetas y Archivos

Tu proyecto web está organizado de la siguiente manera:

## `src/`

La carpeta principal de tu código fuente.

### `components/`

Aquí se encuentran los componentes reutilizables de tu aplicación:

- `Header.js`: Encabezado de tu sitio web.
- `ProjectCard.js`: Tarjeta para mostrar proyectos destacados.
- `BlogPost.js`: Componente para mostrar entradas de blog.
- `CourseCard.js`: Tarjeta para mostrar cursos y talleres.
- ...

### `pages/`

Contiene componentes específicos para cada página:

- `Home.js`: Página de inicio.
- `Projects.js`: Página de proyectos destacados.
- `Blog.js`: Página del blog y recursos.
- `Courses.js`: Página de cursos y talleres.
- ...

### `assets/`

Recursos como imágenes y estilos:

- `images/`: Carpeta para almacenar imágenes.
- `styles/`: Carpeta para estilos globales.

### `App.js`

El punto de entrada principal que define las rutas y cómo se renderizan las páginas.

### `index.js`

Punto de entrada para React que renderiza tu aplicación en el elemento HTML con el id "root".

### `routes.js`

Define las rutas de tu sitio web utilizando una biblioteca de manejo de rutas como `react-router`.

### `styles/GlobalStyles.js`

Define estilos globales, como resetear los estilos por defecto del navegador.

### `styles/theme.js`

Define tu tema personalizado para Chakra UI, como colores y estilos.

---

# Flujo de Componentes

1. La aplicación comienza en `index.js`, que renderiza el componente `App`.

2. `App.js` define las rutas utilizando `react-router` y especifica qué componente se renderizará para cada ruta.

3. Cada página en `pages/` tiene su propio componente. Por ejemplo, `Projects.js` muestra los proyectos destacados utilizando el componente `ProjectCard`.

4. Los componentes reutilizables en `components/` se utilizan en múltiples páginas. Por ejemplo, `Header.js` se muestra en todas las páginas para tener un encabezado consistente.

5. Los estilos globales definidos en `styles/GlobalStyles.js` se aplican en toda la aplicación.

6. El tema personalizado definido en `styles/theme.js` asegura que los componentes de Chakra UI tengan un estilo coherente.

7. Los recursos como imágenes se almacenan en `assets/images/` y se pueden usar en componentes.

8. Los componentes interactúan entre sí para formar la estructura y funcionalidad de tu sitio web.

9. Las rutas definidas en `routes.js` permiten a los usuarios navegar entre las diferentes páginas de tu sitio.

---

¡Espero que esta explicación te ayude a comprender la estructura y el flujo de tu proyecto web! Si tienes más preguntas, no dudes en preguntar.





## Footer

© 2023 AgroEcoWeb. Todos los derechos reservados. Sígueme en las redes sociales: [Facebook](https://www.facebook.com/agroecoweb) | [Twitter](https://twitter.com/agroecoweb)

