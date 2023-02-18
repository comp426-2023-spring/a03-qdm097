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
let shots = ['rock', 'paper', 'scissors']
export function rps(shot){
        if(shot in shots){
                var opponent = shots[floor(random() * 2)]
                result = beat(shot, opponent) ? 'win' : 'loss'
                return {
                        'player': shot,
                        'opponent': opponent,
                        'result': result
                }
        }
        else{
                return {'error': 0}
        }
}
