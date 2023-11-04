"use strict";

export class User {
  #id;
  #name;
  #username;
  #email;
  #address;
  #phone;
  #website;
  #company;

  constructor(id, name, username, email, address, phone, website, company) {
    this.#id = id;
    this.#name = name;
    this.#username = username;
    this.#email = email;
    this.#address = address;
    this.#phone = phone;
    this.#website = website;
    this.#company = company;
  }

  showInformation = () => {
    return `id: ${this.#id}
    name: ${this.#name}
    username: ${this.#username}
    email: ${this.#email}
    address: ${this.#address.showInformation()}
    phone: ${this.#phone}
    website: ${this.#website}
    company: ${this.#company.showInformation()}\n`;
  };

  get id() {
    return this.#id;
  }
}
