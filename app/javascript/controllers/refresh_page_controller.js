import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="refresh-page"
export default class extends Controller {
  connect() {
    console.log("I am here now")
  }

  refresh () {
    window.location.reload();
  }
}
