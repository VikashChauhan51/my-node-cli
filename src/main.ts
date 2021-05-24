#!/usr/bin/env node
import * as chalk from "chalk";
import * as figlet from "figlet";
import { Command } from 'commander';
const program = new Command();
 export class Main {
    
 
    /**
     * run
     */
    public run() {
console.log(chalk.green(figlet.textSync('my-node-cli')));
program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);
console.log('pizza details:');
if (options.small) console.log('- small pizza size');
if (options.pizzaType) console.log(`- ${options.pizzaType}`);
    }
}
//kickoff: entry point of an application.

new Main().run();