export class Business {
  private _date: Date;
  private _amount: number;
  private _price: number;

  constructor(data: Date, quantidade: number, valor: number){
    this._date = data;
    this._amount = quantidade;
    this._price = valor;
  }

  get date(): Date {
    return this._date;
  }

  get amount(): number {
    return this._amount;
  }

  get price(): number {
    return this._price
  }

  public static create(dateString: string, amountString: string, priceString: string): Business {
    const exp = /-/g;
    const date = new Date(dateString.replace(exp, ','))
    const amount = parseInt(amountString)
    const price = parseInt(priceString)
    return new Business(date, amount, price)
  }
}