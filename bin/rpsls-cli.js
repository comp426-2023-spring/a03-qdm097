#!/usr/bin/env node

import {rpsls} from "../lib/rpsls.js"
import minimist from 'minimist'

const args = minimist(process.argv.slice(2), {
        boolean: ['help', 'rules'],
        alias: {
                h: 'help', r: 'rules'
        }
})
function log_help(){
console.log(
`Usage: node-rpsls [SHOT]
Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!

  -h, --help        display this help message and exit
  -r, --rules       display the rules and exit

Examples:
  node-rpsls        Return JSON with single player RPSLS result.
                    e.g. {"player":"rock"}
  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`)
 
}
if(args.help){
	log_help()
	process.exit(0)
}

function log_rules(){
console.log(
`Rules for the Lizard-Spock Espansion of Rock Paper Scissors:

  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock SMOOSHES Lizard
  - Lizard POISONS Spock
  - Spock SMASHES Scissors
  - Scissors DECAPITATES Lizard
  - Lizard EATS Paper
  - Paper DISPROVES Spock
  - Spock VAPORIZES Rock
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
	var out = rpsls(choice)
}
catch{
	log_rules()
	process.exit(0)
}
console.log(JSON.stringify(out))
