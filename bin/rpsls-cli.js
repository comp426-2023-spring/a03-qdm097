#!/usr/bin/env node

import {rps} from "../lib/rpsls.js"
import minimist from 'minimist'

const args = minimist(process.argv.slice(2), {
        boolean: ['help', 'rules'],
        alias: {
                h: 'help', r: 'rules'
        }
})
if(args.help){
        console.log(
                `Usage: node-rps [SHOT]
                Play Rock Paper Scissors (RPS)

                  -h, --help      display this help message and exit
                  -r, --rules     display the rules and exit

                Examples:
                  node-rps        Return JSON with single player RPS result.
                                  e.g. {"player":"rock"}
                  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                                  e.g {"player":"rock","opponent":"scissors","result":"win"}
                `)
        process.exit(0)
}
if(args.rules){
        console.log(`
                Rules for Rock Paper Scissors:

                  - Scissors CUTS Paper
                  - Paper COVERS Rock
                  - Rock CRUSHES Scissors
        `)
	process.exit(0)
}

var choice = args._[0]
var out = rps(choice)
console.log(out)
