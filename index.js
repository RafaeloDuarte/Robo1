const readLine = require('readline-sync')
const robots = {
    userInput:require('./robots/input.js'),
    text:require('./robots/text.js')
}

function start(){

    const content = {}

    robots.userInput(content)
    robots.text(content)

    console.log(content)
}

start() 