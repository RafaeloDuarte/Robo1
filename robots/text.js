const algorithmia = require('algorithmia')
const key = require('../credentials/algorithmia.json').apiKey

function robot(content){

    fetchContentFromWikipedia(content)

    async function fetchContentFromWikipedia(content){
        const algorithmiaAuthenticated = algorithmia(key)
        const wikiAlgo = algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2?timeout=300')
        const wikiResponse = await wikiAlgo.pipe(content.searchTerm)
        console.log('Fazendo um log do wikiresponse')
        console.log(wikiResponse)

        const wikiContent = wikiResponse.get()
        console.log(wikiContent)

    }

}

module.exports = robot
