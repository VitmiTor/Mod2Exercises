"use strict";

export class Geo {
  #lat;
  #lng;

  constructor(lat, lng) {
    this.#lat = lat;
    this.#lng = lng;
  }

  showInformation = () => {
    return `
        lat: ${this.#lat}
        lng: ${this.#lng}`;
  };
}
