"use strict";

export class Address {
  #street;
  #suite;
  #city;
  #zipcode;
  #geo;

  constructor(street, suite, city, zipcode, geo) {
    this.#street = street;
    this.#suite = suite;
    this.#city = city;
    this.#zipcode = zipcode;
    this.#geo = geo;
  }

  showInformation = () => {
    return `
      street: ${this.#street}
      suite: ${this.#suite}
      city: ${this.#city}
      zipcode: ${this.#zipcode}
      geo: ${this.#geo.showInformation()}`;
  };
}
