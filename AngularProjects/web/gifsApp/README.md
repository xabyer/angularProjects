# GifsApp

Application that makes an http request to the giphy API, shows the first 12 answers and saves a historical in the Local Stores with the last 10 searches made by the user.

## Warning!!

This App consumes a paid REST API in its free limited trial version. For this reason the API Key has been removed from the source code. To work locally, in addition to rebuild the node_modules you must get your own API Key.

[giphy](https://giphy.com/)


## ¡¡Aviso!!

Esta App consume una API REST de pago en su versión gratuita de prueba limitada. Por este motivo se ha quitado la API Key del código fuente. Para funcionar en local, además de reconstruir el node_modules debes conseguir tu própia API Key. (Enlace a giphy arriba).



### ToDo

In this first release version there are some details to be polished in the css. The sidebar doesn't go all the way to the bottom when resizing the page when getting the API response. Optionally, if I have time, I may add some extra functionality to the gifs individually.

En esta primera versión de lanzamiento quedan algunos detalles por pulir en el css. La barra lateral no llega hasta el fondo cuando se redimensiona la pagina al obtener la respuesta de la API. Opcionalmente, si dispongo de tiempo, quizá añada alguna funcionalidad extra a los gifs de manera individual.

### Application features:

1. Modular structure that allows scaling the application in case you want to expand it.

2. Use of a service for communication between the different components.

3. Use of the @ViewChild directive to get a reference to the browser input and manipulate it.

4. Historical of searches.

5. Local Storage management to save searches.

6. Handling of http requests and API Keys


>This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.
>
>### Development server
>
>Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any >of the source files.
>
>### Code scaffolding
>
>Run `ng generate component component-name` to generate a new component. You can also use `ng generate >directive|pipe|service|class|guard|interface|enum|module`.
>
>### Build
>
>Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
>
>### Running unit tests
>
>Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
>
>### Running end-to-end tests
>
>Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package >that implements end-to-end testing capabilities.
>
>### Further help
>
>To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
>