"use strict";

export class Company {
  #name;
  #catchPhrase;
  #bs;

  constructor(name, catchPhrase, bs) {
    this.#name = name;
    this.#catchPhrase = catchPhrase;
    this.#bs = bs;
  }

  showInformation = () => {
    return `
      company name: ${this.#name}
      catchPhrase: ${this.#catchPhrase}
      bs: ${this.#bs}`;
  };
}
