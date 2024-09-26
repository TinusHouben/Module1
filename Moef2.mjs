import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboortejaar = parseFloat(await userInput.question('Geef je geboortejaar in: '))
let toekomstjaar = parseFloat(await userInput.question('Geef een jaar in de toekomst in: '))

let berekeningleeftijd = toekomstjaar - geboortejaar
let berekeningleeftijdPlus1 = berekeningleeftijd + 1

console.log("In " + toekomstjaar + " zal ik " + berekeningleeftijd + " of " + berekeningleeftijdPlus1 + " jaar oud zijn.")