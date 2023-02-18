#!/usr/bin/env node


function beat(choice1, choice2){
        if(choice1 == 'rock'){
                return choice2 == 'scissors'
        }
        if (choice1 == 'paper'){
                return choice2 == 'rock'
        }
        return choice2 == 'paper'
}

import {random, floor} from "mathjs"
import "JSON"
let shots = ['rock', 'paper', 'scissors']
export function rps(shot){
	var choice = shots[floor(random() * shots.length)]
	if(shot === null || shot === undefined){
		return JSON.stringify({'player': choice})
	}
        if(shots.includes(shot)){
		if(shot === choice){
			var result = 'tie'
		}
		else{
			var result = beat(shot, choice) ? 'win' : 'loss'
		}
                return JSON.stringify({
                        'player': shot,
                        'opponent': choice,
                        'result': result
                })
        }
        else{
                return {'error': 0}
        }
}
export function rpsls(shot){
	shots.push('lizard')
	shots.push('spock')
	return rps(shot)
}
