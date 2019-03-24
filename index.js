const readLine = require('readline-sync')
const robots = {
    userInput:require('./robots/input.js'),
    text:require('./robots/text.js')
}

function start(){

    robots.text(robots.userInput())

}

start() 