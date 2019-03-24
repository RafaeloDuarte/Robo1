const algorithmia = require('algorithmia')
const key = require('../credentials/algorithmia.json').apiKey

async function robot(content){

    await fetchContentFromWikipedia(content)
    sanitizeContent(content)

    async function fetchContentFromWikipedia(content){
        const algorithmiaAuthenticated = algorithmia(key)
        const wikiAlgo = algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2?timeout=300')
        const wikiResponse = await wikiAlgo.pipe(content.searchTerm)
        const wikiContent = wikiResponse.get()

        content.sourceContentOriginal = wikiContent.content
        //console.log(content.sourceContentOriginal)
        
    }

    function sanitizeContent(){
        const sanitizedContent = removeBlancLinesAndMarkdown(content.sourceContentOriginal)
        const withoutDatesInParentheses = removeDatesInParenthesis(sanitizedContent)

        console.log(withoutDatesInParentheses)

        function removeBlancLinesAndMarkdown(text){
            const allLines = text.split('\n')
            const withoutBlancLinesAnsMarkdown = allLines.filter((line) =>{
                if(line.trim().length ===0 || line.trim().startsWith('=')){
                    return false
                }
                return true
            })
            return withoutBlancLinesAnsMarkdown.join(' ')
        }
    }

    function removeDatesInParenthesis(text){
        return text.replace(/\((?:\([^()]*\)|[^()])*\)/gm, '').replace(/  /g,' ')
    }

}

module.exports = robot
