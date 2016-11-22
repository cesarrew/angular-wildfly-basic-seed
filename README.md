# angular-wildfly-basic-seed

A very simple seed that includes only the essential to start a project with Angular 2, PrimeNG and Wildfly 10 in the back-end.

Note: If you need a seed to a front-end project only, use https://github.com/cesarrew/angular-basic-seed.git.

## Features

- JiT (Just-in-Time) compiler to speed up de development using "start" task.
- AoC (Ahead-of-Time) compiler to optimize production builds using "build" task.
- Very simple structure, only a few files to configure the project.
- The whole project is in a maven structure. The webapp maven folder is updated with the front-end files when npm "build" task is completed.
- Simple pom.xml file ready to use Wildfly 10 dependencies.
- Already configured CORS to avoid problems accessing the REST services from another host (i.e. Development enviroment at http://localhost:3000 trying to access the back-end at http://localhost:8080).
- Already configured Push Stated in Wildfly using the rewrite-servlet library allowing use Angular 2 default router mechanism.
- Some Visual Studio Code settings, like NPM tasks definition.

## Used tools and libraries

- NPM, Webpack 2, TypeScript, Angular 2 and PrimeNG in front-end.
- Maven, Java 8 and Wildfly 10 (pom.xml configuration) in back-end.

## How to configure

### Front-end

- All front-end files are in src/main/angular folder.
- All resources files, like modules, scripts and CSS should be declared in src/main/angular/src/resources.ts file. Scripts and styles should not be manually included in index.html.

### Back-end

- The project follows the regular struture of a Maven project.
- All dependencies should be declared in pom.xml.

## How to start

Note that Maven 3 and NPM 3 or higher is required to build the project.

```bash
# Changes the current folder to front-end source folder.
$ cd src/main/angular

# Installs all front-end dependencies declared in package.json.
$ npm install

# Starts development server. All changes will be in sync with the browser. The app will be available at http://localhost:3000.
$ npm start

# Updates src/main/webapp with the ready production front-end files and generates a WAR which can be deployed in a Wildfly 10 server.
$ npm run build
```

## Main files

- `pom.xml`: Used to configure back-end Java EE 7 project.
- `src/main/angular/package.json`: Used to configure front-end project.
- `src/main/angular/tsconfig.json`: Used to configure TypeScript transpilation options.
- `src/main/angular/config/webpack.dev.js`: Used to configure front-end development build.
- `src/main/angular/config/webpack.prod.js`: Used to configure front-end production build.
- `src/main/angular/src/resources.ts`: Used to declare all front-end resources, except polyfills. These are declared in polyfills.ts.
- `src/main/angular/src/polyfills.ts`: Used to declare polyfills.

## Questions? Open a Issue!
