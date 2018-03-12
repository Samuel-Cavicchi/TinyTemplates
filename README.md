# TinyTemplates

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.
## Setting up Project with Node
First start by cloning the project.
`git clone https://github.com/Samuel-Cavicchi/TinyTemplates.git`
Then use npm install to aquire dependencies.
`npm install`
**Then make sure to install firebase functions dependencies, as this is a seperate folder**
Navigate to the functions folder
`npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deploying to Firebase
### Functions
Firebase functions are a seperate app with it's own node modules. When deploying to firebase we must exclude these.
` firebase deploy --except functions `
When working on functions we must deploy them seperately.
` firebase deploy --only functions `
