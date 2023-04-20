// eslint-disable-next-line
import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /* amount */
  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  /* currency */
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  /* method that returns attributes in the format amount currency_name (currency_code). */
  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  /* static method that accepts two arguments: amount (Number), conversionRate (Number). */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
