export class Business {
    constructor(data, quantidade, valor) {
        this._date = data;
        this._amount = quantidade;
        this._price = valor;
    }
    get date() {
        return this._date;
    }
    get amount() {
        return this._amount;
    }
    get price() {
        return this._price;
    }
    static create(dateString, amountString, priceString) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const amount = parseInt(amountString);
        const price = parseInt(priceString);
        return new Business(date, amount, price);
    }
}
