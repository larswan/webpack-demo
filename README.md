
# Webpack, Bundling & NPM Notes

This is a mini project to test out webpack and learn more about bundling and npm.

## Bundler Basics

Webpack is a bundler. I've been using Vite which uses Esbuild. Webpack is older and more mature and flexible. Vite is newer/faster/easier to setup. Webpack has more plugins for production builds.

Since you write things in different JS files and they depend on each other (eg: import variable from './otherFile.js)
For this to work when the browser loads index.html, all the files would have to be:

1. included in the HTML scripts in `<head>` or `<body>` to be run and..
2. in the correct order.

eg:
```js
<script src="main.js"></script> 
```
couldn't be before any JS file that it imports from since they wouldn’t have been initiated yet.

Bundlers take an entry point like './src/index.js' (which is set in the webpack.config.js file you have to create in the root directory) and basically figure out how to make it all into one big js script.

## This example

1. Made an index.html file with bundle.js (doesn't exist yet) script in the body.
2. Made src/index.js which will be set as the entry point for webpack later.
3. Installed lodash as a sample dependency to be referenced in idex.js
4. Made webpack.config.js in the root. This is where webpack automatically looks for that file but you could set it to something else by running:

```bash
$npx webpack --config other.config.js
```

5. Set the entry point and output.
6. Ran $npx webpack to create the dist/bundle.js file.
7. Open index.html in Live Server and it says Hello webpack. Beautiful.
8. Added a "build": "webpack" script in package.json so that you can now run: 
```bash
$npm run build
```

## package.json notes

When you install a package with $npm install it adds the package as a dependency in package.json so that when someone else needs to work on the program they just run $npm install.

You can add terminal commands in package.json in the scripts object.

For example I could add a script in my portfolio package.json like $npm getSketches that would generate a new list of the addresses for sketches I add to the github folder.

To execute a script defined in package.json in the terminal:

```bash
$npm run test
```

runs

```json
  "scripts": {
    "test": "echo \"testing\""
  },
```

The YouTube guy added:
```json
"build": "webpack ./src/index.js ./dist/main.js" 
```

so that he could run 
```bash
$npm run build 
```
to create a bundle without having made a webpack config file.