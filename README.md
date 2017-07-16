# Exercise: Build a Blog Post Reader

The blog post reader is scaffolded with [angular-cli](https://cli.angular.io/) and therefore based on Angular (4) and is Based on Webpack as build system, Karma and Jasmin for testing. The project is written in Typescript.

The app receives a list of blog posts and displays them as a list with a detail view.

## Usage

----------

Make sure you have node installed  in the latest stable version (8) and angular-cli installed globally.

### Clone the repository

`git clone git@github.com:bertdireins/test-blog-post-reader.git`

### Install dependencies

Run `npm install` in root directory of the cloned repository.

### Running local dev server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Running unit tests

Run `ng test` to execute the unit tests via Karma.

## Development decisions

----------

### Why the blog-posts module is placed in src/modules and not in src/app?

The cause why i placed it in src/modules folder is a possible reuse of its components, services and models in other projects. It is in some way still tied to the angular-cli infrastructure (eg. by using the environment json files) but for future use it has not to be cut out of the app folder. In src/app are just components for assembling the views, wire components and routing.

### Why the favorites service is working with post IDs and not posts?

Lower memory footprint. If you would save the list you'd save the ids and retrieve the posts via API calls.

## What should be done next?

----------

### Use sass and not CSS

This can be changed easily and the sass-loader is already included in angular-cli.

### Configure the API URL via provider factory

The endpoint must be passed to the constructor of the service and configured when it is registered as provider in the module.

### Frontend usability

It is not really responsive and not really usable on small view ports.

### Add IE11 support

To activate the polyfills to work in IE11 and maybe IE10 `src/polyfills.ts` has to be edited. 

