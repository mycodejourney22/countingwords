import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="wordcounters"
export default class extends Controller {
  static targets = ["item", "form"]


  connect() {
  }

  send (event) {
    event.preventDefault();
    const myWords = this.formTarget.value
    this.#spellWords(myWords)
  }

  hightlight (event) {
    let selectArea = ""
    if (document.getSelection) {
      selectArea =  document.getSelection().toString()
    } else if ( document.selection) {
      selectArea =  document.createRange().text
    }
    this.#spellWords(selectArea)

  }

  #forWords (myWord, data) {
    this.wordArr = []
    this.errorCount = data.spellingErrorCount
    if (data.spellingErrorCount > 0 ) {
      const insidewords = data.elements[0].errors
      insidewords.forEach ((item) => {
      this.wordArr.push(item.word)
    })}
    else { this.wordArr.push("Nil")}
    const charaWord = myWord.length
    const nospaceChar = myWord.replace(/\s/g, '').length
    const wordCount = myWord.match(/\w+-?'?\w*/g).length
    const sentCount = myWord.split('.').length
    const paraCount = myWord.split("\n\n").length
    const lineCount = myWord.split(/\r\n|\r|\n/).length
    this.itemTarget.innerHTML =  `<p>Character count: <span> ${charaWord} </span></p>
                                <p>Character count without spaces: <span> ${nospaceChar} </span> </p>
                                <p>Line count: <span> ${lineCount} </span> </p>
                                <p>Word count: <span> ${wordCount} </span></p>
                                <p>Sentence count: <span> ${sentCount} </span></p>
                                <p>Error count: <span> ${this.errorCount} </span></p>
                                <p>Paragraph: <span> ${paraCount} </span></p>
                                <p>Wrong words: <span> ${this.wordArr.join(" ")} </span></p>
                                `
  }

  #spellWords (myWord) {
    fetch('https://jspell-checker.p.rapidapi.com/check', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '3b739ff8d7msh80f76a14bca1cabp114681jsn833db6b65c4f',
        'X-RapidAPI-Host': 'jspell-checker.p.rapidapi.com'
      },
      body: `{"language":"enUS","fieldvalues":"${myWord}","config":{"forceUpperCase":false,"ignoreIrregularCaps":false,"ignoreFirstCaps":true,"ignoreNumbers":true,"ignoreUpper":false,"ignoreDouble":false,"ignoreWordsWithNumbers":true}}`
    } )
      .then(response => response.json())
      .then(data => this.#forWords(myWord, data))
      .catch(err => console.error(err));

  }

}
