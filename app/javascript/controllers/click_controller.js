import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="click"
export default class extends Controller {
  static targets = ['light', 'dark']


  connect() {
    console.log("I am connected!!!!")
    console.log(this.darkTarget)
    console.log(this.lightTarget)
  }

  changemode () {
    console.log(this.element)
    this.element.classList.toggle("body")
    this.darkTarget.classList.toggle("d-none")
    this.lightTarget.classList.toggle("d-none")
  }
}
