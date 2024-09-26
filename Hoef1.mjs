import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let aantalDagen = parseFloat(await userInput.question('Geef het aantal dagen: '))
let aantalUren = parseFloat(await userInput.question('Geef het aantal uren: '))
let aantalMinuten = parseFloat(await userInput.question('Geef het aantal minuten: '))
let aantalSeconden = parseFloat(await userInput.question('Geef het aantal seconden: '))

let aantalDagenS = aantalDagen * 86400
let aantalUrenS = aantalUren * 3600
let aantalMinutenS = aantalMinuten * 60
let aantalSecondenS = aantalSeconden

let TotaalSeconden = aantalDagenS + aantalMinutenS + aantalUrenS + aantalSecondenS

console.log("Totaal seconden: " + TotaalSeconden)