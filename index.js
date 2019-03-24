const readLine = require('readline-sync')
const robots = {
    userInput:require('./robots/input.js'),
    text:require('./robots/text.js')
}

async function start(){

    await robots.text(await robots.userInput())

}

start() 