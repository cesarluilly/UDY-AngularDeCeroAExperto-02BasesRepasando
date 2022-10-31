# Solo se repasa para practicar
# Bases

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Temas puntuales de la sección 4: Introduccion a Angular
¿Qué veremos en esta sección?
Este es un breve listado de los temas fundamentales:

* Crear proyectos de Angular
* Explicar cada archivo y directorio de un proyecto
* Componentes
* Módulos
* One way data binding
* Uso del AngularCLI - Angular Command Line Interface
* Directivas creadas por Angular
* ngIf y ngIf-else
* Y más...

Esta es la sección donde empezaremos nuestro camino de Angular.

## Temas aprendidos
* [Creacion de componentes manuales y automatico](https://angular.io/guide/component-overview)

* [Eventos en angular](https://www.w3schools.com/angular/angular_events.asp)

* [One way data binding](https://www.pluralsight.com/guides/one-and-two-way-data-binding-angular)

* [One way data binding](https://dev.to/danywalls/one-way-and-two-way-data-binding-in-angular-3aif)

* Crear componente listado de forma automatica 
    * > `ng generate component heroes/listado`

* [Directiva escructural ngFor, ngIf-else, ngTemplate](https://angular.io/guide/structural-directives)

* [Creacion de modulos manualmente](https://angular.io/guide/architecture-modules)

# Temas puntuales de la sección 5: Expandiendo nuestras bases
¿Qué veremos en esta sección?
Una vez sentadas las bases de Angular en la sección anterior, vamos a seguir expandiéndolas aquí, con los siguientes temas:

Profundizar un poco más en los módulos
* FormsModule
* ngModel
* @Inputs
* @outputs
* Servicios
* Métodos en servicios
* Depuraciones

Hay más temas en los videos, pero en forma general esto es lo principal por ahora, tengan presente que aunque todo esto es opcional, la mayor parte de aplicaciones de Angular usan en cierto punto cada uno de los temas que están en esta sección, por lo que hay que asegurarnos de comprender bien cada lección.

## Temas aprendidos

* Creamos un modulo dbz con `ng generate module dbz`
* Creamos un componente y no queremos el archivo de pruebas `ng generate component dbz/mainPage --skipTests`
* Cuando damos click en un `boton de tipo submit` dentro 
de un form, se puede utilizar `event?.preventDefault();`
para no recargar la pagina, pero angular ya tiene otras
 alternativas a esto.
 * [Uso de FormsModule de Angular](https://angular.io/api/forms/FormsModule)
 * Al utilizar FormsModule podemos utilizar `ngSubmit` en lugar del `submit de javascript`

* Recomendacion para las importaciones de archivos.
    * Primero: Importaciones de Angular
    * Segundo: Importaciones de Terceros
    * Tercero: Importaciones de propias de nosotros

* Parentesis () es para emitir o escuchar eventos
    * ```html
        <form (ngSubmit)="agregar()"> 
        ```
* Llaves cuadradas [] para establecer alguna propiedad a 
este elemento HTML o a propiedad de una clase(normalmente se pone en el atributo value de un elemento HTML)
    * ```html
        <input 
            type="number" 
            placeholder="Poder"
            [value]="nuevo.poder"
            >
        ```
    * ```html
        <input 
            type="text" 
            placeholder="Nombre"
            [value]="nuevo.nombre"
            (input)="cambiarNombre($event)"
            > 
        ```
    * ```html
        <!-- Donde personajesHijo es una propiedad con decorador @input -->
        <app-personajes [personajesHijo]="personajesPadre"></app-personajes>
        ```
* La siguiente sintaxis significa que quiero tanto escuchar
como emitir el evento y el valor del evento me interesa
que caiga dentro de la propiedad `nuevo.nombre` y este es 
el famoso **[Two way data binding](https://angular.io/guide/two-way-binding)** (comunicacion en dos vias)
    * `[(ngModel)]="nuevo.nombre"`
        * ```html
            <input 
                type="text" 
                placeholder="Nombre"
                name="nombre"
                [(ngModel)]="nuevo.nombre"
                >
            ```

* [Pipes](https://angular.io/guide/pipes) sirve para 
transformar visualmente la informacion
    * ```typescript
        {{personaje.poder | number}}
        ```
* Componente padre es el que en su HTML invoca a un 
selector de otro componente(hijo).

* [Decorador @Input](https://angular.io/api/core/Input) se 
pone en alguna propiedad del **componente hijo** y es
para recibir la informacion que enviara el 
**componente padre** a traves de una propiedad

* APUNTE y CONCLUSION PERSONAL. El ciclo de deteccion de 
cambios de angular, trabaja mas o menos como las referencias
a un objeto en POO, por ejemplo y hay dos variables que
apuntan a un objeto, pues realmente cuando a traves de la 
variable modifiquemos algo, realmente estamos afectando al 
objeto, entonces ambos tienen la misma informacion.

* [Como se pasan los valores primitivos y objetos en 
**Javascript**, por referencia o valor?](https://medium.com/laboratoria-developers/por-valor-vs-por-referencia-en-javascript-de3daf53a8b9#:~:text=Estrictamente%20hablando%2C%20JavaScript%20no%20nos,es%20la%20referencia%20en%20s%C3%AD.)
    * Los primitivos se pasan por valor
    * Los objetos se pasan por referencia

* [Decorador @Output](https://angular.io/guide/inputs-outputs) 
este es utilizado cuando tenemos un componente hijo y 
y este componente necesita [emitir](https://angular.io/api/core/EventEmitter) 
un valor al componente padre, en conclusion sirve para emitir eventos

* Debugger se puede hacer
    * Poniendo Breckpoint a nivel de navegador
    * Poniedo la palabra Debugger en el codigo
    * Nos posicionamos en el proyecto en VS presionamos
        F5 y elegimos a Chrome como ambiente de desarrollo
        * Ponemos el puerto en el cual esta corriendo la app
        * Presionamos de nuevo F5 y se nos abre el navegado
            asociado a Chrome.









