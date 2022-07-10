import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  connect() {

    console.log("I am here connected navar")
  }

  updateNavbar () {
    if (window.scrollY >= 50) {
      this.element.classList.remove("navbar-mobile")
    } else {
      this.element.classList.add("navbar-mobile")
    }
  }


}
