import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="refresh-page"
export default class extends Controller {
  connect() {
  }

  refresh () {
    window.location.reload();
  }

}
