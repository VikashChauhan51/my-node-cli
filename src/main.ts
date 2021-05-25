#!/usr/bin/env node
import * as chalk from "chalk";
import * as figlet from "figlet";
import * as arg from "arg";


const args = arg(
  {
    '--path': String,
    '--name': String,
    '-p': '--path',
    '-n': '--name',
  },
  {
    argv: process.argv.slice(2),
    stopAtPositional: false
  }
);

 export class Main {
    
    /**
     * run
     */
    public run() {
    let path = args["--path"] || args._[0];
    let name = args["--name"] || args._[1];
    console.log(chalk.green(figlet.textSync('my-node-cli')));
    console.log(path);
    console.log(name);
    }
 
}
//kickoff: entry point of the application.
new Main().run();