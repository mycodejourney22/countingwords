import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="click"
export default class extends Controller {
  static targets = ['light', 'dark']


  connect() {

  }

  changemode() {
    this.element.classList.toggle("body")
    this.darkTarget.classList.toggle("d-none")
    this.lightTarget.classList.toggle("d-none")
  }
}
