"use strict";

import { Geo } from "../clases/user/Geo.js";
import { Address } from "../clases/user/Address.js";
import { Company } from "../clases/user/Company.js";
import { User } from "../clases/user/User.js";

export const generateUserArray=(arrayUserJson)=>{
    const arrayUser=[]

    arrayUserJson.forEach((userJson) => {
        arrayUser.push(generateUser(userJson))
    });

    return arrayUser
}

export const generateUser = (userJson) => {
  const address = generateAddress(userJson["address"]);
  const company = generateCompany(userJson["company"]);
  const id = userJson["id"];
  const name = userJson["name"];
  const userName = userJson["username"];
  const email = userJson["email"];
  const phone = userJson["phone"];
  const website = userJson["website"];

  return new User(id, name, userName, email, address, phone, website, company);
};

const generateAddress = (addressJson) => {
  const geo = generateGeo(addressJson["geo"]);

  const street = addressJson["street"];
  const suite = addressJson["suite"];
  const city = addressJson["city"];
  const zipcode = addressJson["zipcode"];

  return new Address(street, suite, city, zipcode, geo);
};

const generateGeo = (geoJson) => {
  const lat = geoJson["lat"];
  const lng = geoJson["lng"];

  return new Geo(lat, lng);
};

const generateCompany = (companyJson) => {
  const name = companyJson["name"];
  const catchPhrase = companyJson["catchPhrase"];
  const bs = companyJson["bs"];

  return new Company(name, catchPhrase, bs);
};
