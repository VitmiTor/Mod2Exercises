"use strict";

export class Todo {
  #userId;
  #id;
  #title;
  #completed;

  constructor(userId, id, title, completed) {
    this.#userId = userId;
    this.#id = id;
    this.#title = title;
    this.#completed = completed;
  }

  showInformation = () => {
    const message = `
    userID: ${this.#userId}
    id: ${this.#id}
    title: ${this.#title}
    completed: ${this.#completed}
    `;
    console.log(message);
  };

  get userId() {
    return this.#userId;
  }

  get completed() {
    return this.#completed;
  }
}
