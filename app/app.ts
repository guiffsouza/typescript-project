import { BusinessControl} from './controllers/business-control.js'

const businessControl = new BusinessControl()

const form: HTMLFormElement = document.querySelector(".form")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  businessControl.add()
})