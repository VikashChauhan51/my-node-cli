# my-node-cli
Nodejs CLI with TypeScript

## Steps to setup:
1. Install nodejs.
2. Create an project directory like my-cli (`mkdir my-cli` )
3. navigate to directory (`cd my-cli`)
4. run `npm init` command and provide project specific information.
5. Install typescript locally using following command:
   
   `npm install --save-dev typescript tslint @types/node`

   If you want to install typescript only then use following command:
   `npm install --save-dev typescript`
6. Now add *tsconfig.json* file at root directory (my-cli) and add following code:

   `{
    "compilerOptions": {
      "lib": ["es2015"],
      "module": "commonjs",
      "outDir": "bin",
      "sourceMap": true,
      "strict": true,
      "allowJs":false,
      "noImplicitThis":true,
      "strictNullChecks":true,
      "removeComments":true,
      "noImplicitAny": true,
      "noImplicitOverride":true,
      "noImplicitReturns":true,
      "noUncheckedIndexedAccess":true,
      "noUnusedLocals":true,
      "noUnusedParameters":true,
      "allowUnreachableCode":false,
      "allowUnusedLabels":false,
      "target": "es6"
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "**/*.spec.ts"]
  }
  `

7. Add *tslint.json* file with following code:

   `
   {
    "defaultSeverity": "error",
    "extends": [
      "tslint:recommended"
    ],
    "rules": {
      "semicolon": false,
      "trailing-comma": false,
      "no-duplicate-variable": true,
      "no-empty-interface": true,
      "no-eval": true,
      "no-shadowed-variable": true,
      "no-var-keyword": true
    }
  }
   `