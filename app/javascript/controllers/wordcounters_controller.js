import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="wordcounters"
export default class extends Controller {
  static targets = ["item", "form"]
  connect() {
  }


  send (event) {
    event.preventDefault();
    const myWords = this.formTarget.value
    this.#forWords(myWords)
  }

  hightlight (event) {
    let selectArea = ""
    if (document.getSelection) {
      selectArea =  document.getSelection().toString()
    } else if ( document.selection) {
      selectArea =  document.createRange().text
    }
    this.#forWords(selectArea)

  }

  #forWords (myWord) {
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
                                <p>Paragraph: <span> ${paraCount} </span></p>`
  }

}
