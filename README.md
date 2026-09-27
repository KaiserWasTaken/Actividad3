# Componentes visuales en JavaScript

## Portada

**Actividad 3 - Libreria de componentes visuales interactivos**

Esta libreria contiene componentes hechos con JavaScript puro, HTML y CSS. Su objetivo es facilitar la creacion de elementos interactivos que suelen repetirse en una pagina web.

### Problema que resuelve

Cuando una pagina necesita mostrar ventanas, notificaciones o contenido desplegable, normalmente se debe escribir el mismo codigo varias veces. Esta libreria permite crear esos elementos usando configuraciones y metodos sencillos, sin repetir toda la estructura HTML y JavaScript.

### Video de referencia

<div align="center">
  <a href="https://youtu.be/2e0pw95OaRE" target="_blank" rel="noopener noreferrer">
    <img src="https://img.youtube.com/vi/2e0pw95OaRE/maxresdefault.jpg" alt="Publicidad de JavaScript" width="720" />
  </a>
</div>

Los componentes disponibles son:

- **Modal:** muestra una ventana de informacion sobre la pagina.
- **Toast:** muestra una notificacion temporal.
- **Accordion:** permite abrir y cerrar bloques de contenido.

El proyecto no utiliza React, Vue, Angular, npm ni otras dependencias externas.

## Instalacion

No es necesario instalar paquetes. Solo copia las carpetas `css` y `js` dentro de tu proyecto HTML.

La estructura minima es:

```text
mi-proyecto/
|-- index.html
|-- css/
|   `-- componentes.css
`-- js/
    `-- componentes.js
```

Dentro del archivo HTML, agrega el CSS dentro de la etiqueta `<head>`:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/componentes.css">
</head>
```

Agrega el archivo JavaScript antes de cerrar la etiqueta `<body>`:

```html
<script src="js/componentes.js"></script>
```

Con esas dos etiquetas, la libreria queda disponible mediante el objeto global `Componentes`.

## Uso

### 1. Modal

El modal sirve para mostrar un mensaje en una ventana que aparece sobre la pagina.

```html
<button id="abrir-modal">Abrir modal</button>

<script>
  const modal = new Componentes.Modal({
    title: 'Aviso importante',
    content: 'Este contenido se envio desde JavaScript.',
    closeText: 'Aceptar'
  });

  document.querySelector('#abrir-modal').addEventListener('click', function () {
    modal.open();
  });
</script>
```

Metodos disponibles:

```js
modal.open();  // Abre la ventana
modal.close(); // Cierra la ventana
```

Tambien se pueden usar callbacks cuando el modal se abre o se cierra:

```js
const modal = new Componentes.Modal({
  title: 'Formulario enviado',
  content: 'Los datos fueron enviados correctamente.',
  onOpen: function () {
    console.log('El modal se abrio');
  },
  onClose: function () {
    console.log('El modal se cerro');
  }
});
```

### 2. Toast

El toast sirve para mostrar mensajes cortos durante un tiempo determinado.

```html
<button id="mostrar-mensaje">Guardar informacion</button>

<script>
  const toast = new Componentes.Toast({
    duration: 4000
  });

  document.querySelector('#mostrar-mensaje').addEventListener('click', function () {
    toast.show({
      title: 'Guardado',
      text: 'La informacion se guardo correctamente.',
      type: 'success'
    });
  });
</script>
```

El tipo puede ser `success` o `error`:

```js
toast.show({
  title: 'Error',
  text: 'No se pudo completar la accion.',
  type: 'error',
  duration: 5000
});
```

### 3. Accordion

El accordion necesita un elemento HTML que funcione como contenedor. Sus preguntas y respuestas se envian en un arreglo.

```html
<div id="preguntas"></div>

<script>
  const datos = [
    {
      title: 'Que es JavaScript puro?',
      content: 'Es JavaScript utilizado sin un framework.'
    },
    {
      title: 'Se puede reutilizar?',
      content: 'Si, se pueden crear varias instancias con diferentes datos.'
    }
  ];

  const accordion = new Componentes.Accordion(
    document.querySelector('#preguntas'),
    {
      items: datos
    }
  );
</script>
```

Cada elemento del arreglo debe tener las propiedades `title` y `content`.

## Ejemplo completo

Este ejemplo muestra como incluir los archivos y utilizar los tres componentes en una misma pagina:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo de componentes</title>
  <link rel="stylesheet" href="css/componentes.css">
</head>
<body>
  <h1>Mi pagina</h1>

  <button id="abrir-modal">Abrir modal</button>
  <button id="mostrar-toast">Mostrar toast</button>
  <div id="preguntas"></div>

  <script src="js/componentes.js"></script>
  <script>
    const modal = new Componentes.Modal({
      title: 'Hola',
      content: 'Este es un modal reutilizable.'
    });

    document.querySelector('#abrir-modal').addEventListener('click', function () {
      modal.open();
    });

    const toast = new Componentes.Toast();
    document.querySelector('#mostrar-toast').addEventListener('click', function () {
      toast.show({
        title: 'Correcto',
        text: 'El boton fue presionado.',
        type: 'success'
      });
    });

    new Componentes.Accordion(document.querySelector('#preguntas'), {
      items: [
        {
          title: 'Pregunta de ejemplo',
          content: 'Respuesta de ejemplo.'
        }
      ]
    });
  </script>
</body>
</html>
```

## Archivos del proyecto

```text
index.html              Pagina de demostracion
css/componentes.css     Estilos de los componentes y de la pagina
js/componentes.js       Logica de Modal, Toast y Accordion
img/README.txt          Carpeta para imagenes adicionales
README.md               Documentacion del proyecto
```

Para probar la actividad, abre `index.html` directamente en el navegador.
