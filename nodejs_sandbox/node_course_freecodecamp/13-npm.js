/*
    NPM
      - https://www.npmjs.com/
      - Node Package Manager
      - Enable 3 things:
        1. re-use our own code in other projects
        2. use code written by other developers
        3. share our own solutions with other developers
      - Concepts:
        - npm calls re-usable code a package
        - package is essentially that contains js code
        - other names are dependecies and modules
      - Commands:
        - npm - global command, comes with node
        - npm --version

        - local dependecy - use it only this particular project
        - npm i <packageName>

        - global dependcy - use it in any project
        - npm install -g <packageName>
        - sudo npm install -g <packageName> (mac)

        - package.json - manifest file (stores important info about project/package)
        - manual approach (create package.json in the root, create properties etc)
        - npm init (step by step, press enter to skip)
        - npm init -y (everything default)
        - package-lock-json - https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json
        - https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/
        - The package. json is used for more than dependencies - like defining project properties, description, author & license information, scripts, etc. The package-lock. json is solely used to lock dependencies to a specific version number.
*/

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
