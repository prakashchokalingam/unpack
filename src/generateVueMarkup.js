'use strict';

const generateImportMap = require('./generateImportMap');
const packageUrls = require('./packageUrls');
module.exports = function(options) {

  const {
    projectName,
    cdn,
    framework
  } = options;

    const markup = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${projectName}</title>
</head>
<body>
  <div id="app"></app>
  <script type="module" src="https://jspm.dev/es-module-shims"></script>
  <script type="importmap-shim">
  ${generateImportMap(framework,cdn)}
  </script>
  <script type="module-shim">
    import Vue  from "vue";
    import App from './App.js';

    new Vue({
      el: '#app',
      components: {
        App
      },
      template: \`<App/>\`
    });
  </script>
</body>
</html>
    `;

  return markup;
};
