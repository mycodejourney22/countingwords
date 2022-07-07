import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="wordcounters"
export default class extends Controller {
  static targets = ["item", "form"]
  connect() {

  }

  send (event) {
    event.preventDefault();
    console.log(event);
    console.log(this.itemTarget.innerHTML)
    const myWords = this.formTarget.value
    const charaWord = myWords.length
    const nospaceChar = myWords.replace(/\s/g, '').length
    const wordCount = myWords.match(/\w+-?'?\w*/g).length
    const sentCount = myWords.split('.').length
    const paraCount = myWords.split("\n\n").length
    const lineCount = myWords.split(/\r\n|\r|\n/).length
    this.itemTarget.innerHTML =  `<p>Character count: <span> ${charaWord} </span></p>
                                <p>Character count without spaces: <span> ${nospaceChar} </span> </p>
                                <p>Line count: <span> ${lineCount} </span> </p>
                                <p>Word count: <span> ${wordCount} </span></p>
                                <p>Sentence count: <span> ${sentCount} </span></p>
                                <p>Paragraph: <span> ${paraCount} </span></p>`

  }
}
