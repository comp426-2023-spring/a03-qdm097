#!/usr/bin/env node

import {rps} from "../lib/rpsls.js"
import minimist from 'minimist'

const args = minimist(process.argv.slice(2), {
        boolean: ['help', 'rules'],
        alias: {
                h: 'help', r: 'rules'
        }
})
function log_help(){
console.log(
`Usage: node-rps [SHOT]
Play Rock Paper Scissors (RPS)

  -h, --help      display this help message and exit
  -r, --rules     display the rules and exit

Examples:
  node-rps        Return JSON with single player RPS result.
                  e.g. {"player":"rock"}
  node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                  e.g {"player":"rock","opponent":"scissors","result":"win"}`)

}
if(args.help){
        log_help()
        process.exit(0)
}

function log_rules(){
console.log(
`Rules for Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`
)
}

if(args.rules){
        log_rules()
        process.exit(0)
}

import "JSON"

var choice = args._[0]
try{
        var out = rps(choice)
}
catch{
        log_help()
        log_rules()
        process.exit(0)
}
console.log(JSON.stringify(out))
