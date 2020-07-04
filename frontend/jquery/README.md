## ¿Qué es jQuery?
JQuery es una libreria de JavaScript que permite a todos los navegadores leer código JavaScript, es decir, todo el codigo escrito en jQuery trabajará de misma forma sin importar el navegador que se esté utilizando.
JQuery también convierte lo que debería haber sido un gran bloque de código en solo unas pocas líneas.  

#### Funciones básicas de jQuery y $(this)
Comenzamos importando la librería de jQuery en nuestro documento HTML, incluimos el link desde la página oficial.

```html
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
```

Lista de funciones más utilizadas:

- Efectos 
  - .hide()
  
  - .show()
  - .toggle()
  - .slideUp()
  - .slideDown()
  - .slideToggle()
  - .fadeOut()
  - .fadeIn()
- CSS
  - .addClass()
  - .removeClass()
  - .css()
- Manipulación
  - .after()
  - .append()
  - .prepend()
  - .attr()
  - .before()
  - .html()
  - .text()
  - .val()
- Eventos
  - .click()
  - .on()
  - .hover()

```javascript
<head>
<script>
   $(document).ready(function() {
       // tu código jquery aquí
   });
</script>
</head>
```

### Comenzando
Con **$** accedemos a toda la libreria de jQuery. Todo lo que hacemos con jQuery tiene que ser precedido por un $. Con **$()** seleccionamos una etiqueta HTML. Si quisieramos seleccionar la etiqueta, tendríamos que escribir **$('body')**. Este selector puede tomar cualquier etiqueta de HTML.  

#### Selecciona los elementos/clase/id de HTML:
Para seleccionar todos los botones (buttons) de tu página web, escribe:
```javascript
$('button')
```
Ahora, puedes agregar todo tipo de propiedades funcionales a tus botones, seleccionaremos todos los botones con el nombre de clase *blue*
```javascript
$('button.blue')
```
Ahora, si quieres seleccionar todos los botones y elementos con la clase *blue*, haz lo siguiente:
```javascript
$('button, .blue')
```
Y si quieres seleccionar un HTML con un ID, así es como lo hacemos. 
```javascript
$('#red')
```
#### Agrega un controlador de eventos
Ahora que hemos seleccionado algo usando el selector jQuery, podemos agregar un "event listener". Un **Event listener** es un detonante para todo el código que deseamos escribir involucrando al elemento que seleccionamos. El event listener para un botón siendo cloqueado:

#### Agrega un controlador de eventos
```javascript
$('button'copy).click();
//**¡ahora el documento está "escuchando" (listening) un evento clic para el elemento button (botón)!**
```

#### Escribe la acción!
```javascript
 $('button').click(function(){
    alert("#¡Haz cliqueado un botón!");
 });
```

#### Getters / Setters
Ciertas funciones de jQuery puede comportarse diferente dependiendo si las ejecutas con parámetros o no.
Fíjate que el texto *myParagraph* se mantendrá igual, aunque sabemos que **.text()** puede ser usado para cambiar el valor de texto de los elementos HTML. Esto es porque cuando llamamos a la función **.text()** sin un parámetro, la función se comportará como una función **getter**. Esta función devolverá el valor de texto del párrafo llamado mi *myParagraph*. Para ilustrar esto, ejecutemos el siguiente código:

```javascript
<script>
  $(document).ready(function(){
      var myText = $('#myParagraph').text();
      alert(myText);
  })
</script>
<body>
    <p id='myParagraph'> ¡Este es mi párrafo! </p>
</body>
```

La otra forma de usar la función **.text()** es una función **setter**. Tal vez te encuentres usando **.text()** en esta capacidad más como **getter**. Para demostrar el uso de **.text()** como setter, mira el siguiente código:
```javascript
<script>
  $(document).ready(function(){
      $('button').click(function(){
          $('#myParagraph').text('mira como I .text() funciona como setter!'copy);
      })
  })
</script>
<body>
    <p id='myParagraph'> ¡Este es mi párrafo! </p>
    <button> ¡Cliquéame para cambiar el párrafo! </button>
</body>
```
#### Presentando el Contenido Dinámico
Al utilizar **.html()** and **.append()**, puedes agregar nuevo contenido HTML a cualquier página que construyas. Esto se denomina contenido dinámico (dynamic content).

#### Usando .on()
La forma más efectiva de agregar controladores de eventos (event handlers) a cualquier contenido HTML renderizado dinamicamente es utilizar el método **.on()**.
Aquí un ejemplo:

```javascript
$(document).on('click', 'button', function(){alert('you clicked a button!')});
```

Entonces, la 'esfera de detección' de este ejemplo de **.on()**, está emparejada con el selector para **todo** el documento. Esto significa que los siguientes parámetros de la función serán aplicados a **todo** lo contenido en **$(document).on()** el documento completo. Este es el mayor alcance que puedes utilizar en una función de jQuery. Si, en cambio, quieres que tu alcance sea menor, puedes elegir un elemento diferente en el selector. 

La función **.on()** toma hasta 4 parámetros y te mostraremos cómo encajan con nuestro ejemplo anterior:

- El **evento** (event): ¿Estás esperando un clic? ¿un envío? ¿un keydown? En este caso, buscamos un **clic**. 
- Datos que deseas pasar al controlador (esto no es necesario y rara vez se usa) ¡Acá no lo estamos usando!
- El **objetivo** (target): Es decir, el elemento al que intentas apuntar. Aquí apuntamos a un **botón** (button), entonces nuestra búsqueda se reduce a escuchar (listen) para que un **botón** sea cliqueado.
- La **función** (function) que quieres ejecutar: ¡Solo las cosas que quieres adjuntar! En nuestro caso, simplemente vamos a alertar a la pantalla que cliqueamos un botón-- **cada vez que el botón es cliqueado**.

Lo mejor de esta función **.on()** es que cada vez que el evento sucede  en el objetivo correspondiente, las partes relevantes del documento son escaneadas en tiempo real. Así, cualquier elemento nuevo agregado luego de que cargue la página, será detectado y el código se ejecutará. Grandioso ¿no? Al usar este método, el código que necesitamos para lograr la misma meta que en el ejemplo anterior, es el siguiente:

```javascript
 $(document).ready(function(){
     $('button').click(function(){
         $('div').append('<h3>I am a dynamically generated h3 </h3>');
      });
     $(document).on('click', 'h3', function(){
         alert('You clicked me!');
     });
 });
```

#### Alcance de .on()

```javascript
 <script>
  $(document).ready(function(){
   $('button').click(function(){
    $('div').append('<h3>I am a new content</h3>');
   });
   $(document).on('mouseover', 'h3', function(){
    $(this).css('color', 'pink');
   });
  });
 </script>
 <body>
  <button>Click me for new content!</button>
  <div class='a'>
   <h3>I am old content</h3>
  </div>
  <div class='b'>
   <h3>I am old content</h3>
  </div>
 </body>

```

Si ejecutas el código anterior, notarás que ambos divs tendrán contenido dinámico generado cuando se hace clic en el botón. Cuando se pasa el cursor (hover over) en cualquier h3  en la página, se transformará en rosado (pink). Tal vez quieras cambiar un poco la funcionalidad para que solo los divs  en el div class 'a'  tengan esa funcionalidad. Podemos cambiar esto fácilmente utilizando correctamente el corrector. Observa:

```javascript
<script>
  $(document).ready(function(){
   $('button').click(function(){
    $('div').append('<h3>I am a new content</h3>');
   });
   $('div.a').on('mouseover', 'h3', function(){ 
    $(this).css('color', 'pink');
   });
  });
</script>
<body>
  <button>Click me</button>
  <div class="a">
   <h3>I am old content</h3>
  </div>
  <div class="b">
   <h3>I am old content</h3>
  </div>
</body>
```

