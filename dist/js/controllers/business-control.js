import { DayWeek } from '../enuns/dayWeek.js';
import { ListBusiness } from "../models/ListBusiness.js";
import { Business } from "../models/Business.js";
import { MessageView } from "../views/MessageView.js";
import { BusinessView } from "../views/BusinessView.js";
export class BusinessControl {
    constructor() {
        this.listBusiness = new ListBusiness();
        this.negociacaoView = new BusinessView("#business-view");
        this.messageView = new MessageView("#message-view");
        this.dateInput = document.querySelector("#date");
        this.amountInput = document.querySelector("#amount");
        this.priceInput = document.querySelector("#price");
    }
    add() {
        const business = Business.create(this.dateInput.value, this.amountInput.value, this.priceInput.value);
        if (!this.businessDay(business.date)) {
            this.messageView.update("It's not a working day");
            return;
        }
        this.listBusiness.add(business);
        this.updateView();
        this.clearForm();
    }
    clearForm() {
        this.dateInput.value = '';
        this.amountInput.value = '';
        this.priceInput.value = '';
        this.dateInput.focus();
    }
    updateView() {
        this.negociacaoView.update(this.listBusiness);
        this.messageView.update('Trading successfully added!');
    }
    businessDay(data) {
        return data.getDay() > DayWeek.DOMINGO && data.getDay() < DayWeek.SABADO;
    }
}
