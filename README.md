# MediCare AI – UI Final

This is an Angular application for MediCare AI – UI Final. The original design is available at https://www.figma.com/design/bRgSJ5YinChGk7kzzE1Ipr/MediCare-AI-%E2%80%93-UI-Final.

## Running the code

Run `npm install` to install the dependencies.

Run `npm start` (or `ng serve`) to start the development server. Navigate to `http://localhost:4200/`.

## Building the project

Run `npm run build` (or `ng build`) to build the project. Build artifacts will be stored in the `dist/medicare-angular` directory.

## Running tests

Run `npm test` (or `ng test`) to run the unit tests via [Karma](https://karma-runner.github.io).

## Project structure

- `src/app/components/` – Angular feature components (landing, dashboard, patient, doctor, lab, pharmacy, admin, brand)
- `src/app/services/` – Angular services (auth, navigation)
- `src/app/app.routes.ts` – Application routes with lazy-loaded components
- `src/app/app.config.ts` – Application configuration (providers, chart.js setup)
- `src/styles.scss` – Global styles with Angular Material theming
  