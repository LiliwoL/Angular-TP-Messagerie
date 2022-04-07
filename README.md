# TPMessagerie

## Création de l'application

```bash
ng new TP_Messagerie
```

N'activez pas le **routing** et gardez le style **CSS**.

On se déplace ensuite dans le dossier créé:

```bash
cd TP_messagerie
```

## Installation de Bootstrap

Afin d'embellir l'app, on ajoute Bootstrap

```bash
npm install bootstrap 4
```

## Création d'un formulaire dans le template principal

### Dépendances du module FormsModule

Pour faire des formulaires, on aura besoin d'importer dans le module principal AppModule:

*app.module.ts*

```typescript
// Ajouter cette ligne en haut du fichier
import { FormsModule } from '@angular/forms';

...
  imports: [
    BrowserModule,
    FormsModule // N'oubliea pas d'importer le module dans la section imports
  ]
...

```

Dans *src/app/app.component.html*:

Commencez par tout effacer, puis tapez ensuite:

```html
<h1>{{ title }}</h1>
```

## Création des composants

La création des composants se fait grâce à la commande

```bash
ng generate component nom_du_composant
```

Donc pour créer les composants
* en-tete
* pied-de-page
* gauche

On tape:

```bash
ng generate component en-tete
ng generate component pied-de-page
ng generate component gauche
```




## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
