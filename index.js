const readLine = require('readline-sync')

function start(){

    const content = {}
    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm(){
        return  readLine.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix(){
        const prefixes = ['Who is','what is','the history of']
        const selectedPrefixIndex = readLine.keyInSelect(prefixes,'Choose one option: ');
        return prefixes[selectedPrefixIndex]
    }
    console.log(content)
}

start() 