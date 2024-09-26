import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = 5
let getal2 = 8

let som = getal1 + getal2
let verschil = getal2 - getal1
let maal = getal1 * getal2
let deling = getal1 / getal2

console.log(som)
console.log(verschil)
console.log(maal)
console.log(deling)