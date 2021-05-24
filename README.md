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
8. Now add typescript build command into *package.json* as given below:
  `
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc --outDir bin"
  }
  `
9. To run the above script use `npm run build` command. This will create a folder called bin and the compiled javascript will be placed there.

10. To inform npm that there is a command line executable available in the node module we have to add the following section.
  
  `
  "bin": {
    "mycli": "./bin/main.js"
}
  `

11. For command line start `npm run start` use the following code inside "scripts" tag:
`
 "start": "node main.js"
`

12. Let's create an npm script using ts-node `npm run dev` by using following code inside "scripts" tag:
`
 "dev": "ts-node src/main.ts"
`

13. Next, let's make our index.ts runnable by telling the shell how to run it:
    #!/usr/bin/env node