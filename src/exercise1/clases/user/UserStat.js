"use strict";

export class UserStat {
  #completed;
  #incompleted;

  constructor() {
    this.#completed = 0;
    this.#incompleted = 0;
  }

  get completed() {
    return this.#completed;
  }

  get incompleted() {
    return this.#incompleted;
  }

  incrementStats = (completed) => {
    if (completed) {
      this.#completed++;
    } else {
      this.#incompleted++;
    }
  };
}
