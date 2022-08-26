import { DayWeek } from '../enuns/dayWeek.js'
import { ListBusiness } from "../models/ListBusiness.js";
import { Business } from "../models/Business.js";
import { MessageView } from "../views/MessageView.js";
import { BusinessView } from "../views/BusinessView.js";

export class BusinessControl {
  private dateInput: HTMLInputElement;
  private amountInput: HTMLInputElement;
  private priceInput: HTMLInputElement;
  private listBusiness = new ListBusiness()
  private negociacaoView = new BusinessView("#business-view")
  private messageView = new MessageView("#message-view")

  constructor() {
    this.dateInput = document.querySelector("#date")
    this.amountInput = document.querySelector("#amount")
    this.priceInput = document.querySelector("#price")
  }
  

  public add(): void {
    const business = Business.create(
      this.dateInput.value,
      this.amountInput.value,
      this.priceInput.value
    )

    if(!this.businessDay(business.date)){
      this.messageView.update("It's not a working day")
      return;
    }

    this.listBusiness.add(business)
    this.updateView()
    this.clearForm()
  }

  private clearForm(): void {
    this.dateInput.value = ''
    this.amountInput.value = ''
    this.priceInput.value = ''
    this.dateInput.focus()
  }

  private updateView(): void {
    this.negociacaoView.update(this.listBusiness)
    this.messageView.update('Trading successfully added!')
  }

  private businessDay(data: Date): boolean {
    return data.getDay() > DayWeek.DOMINGO && data.getDay() < DayWeek.SABADO
  }
}