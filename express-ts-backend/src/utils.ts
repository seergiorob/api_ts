import { NewProduct } from "./types";

const isString = (text: any): text is string => {
  return typeof text === "string" || text instanceof String;
};

const parseName = (nameForReq: any): string => {
  if (!nameForReq || !isString(nameForReq) || nameForReq.trim() === "") {
    throw new Error("Incorrect or missing name: " + nameForReq);
  }
  return nameForReq;
};

const parseDescription = (descriptionForReq: any): string => {
  if (
    !descriptionForReq ||
    !isString(descriptionForReq) ||
    descriptionForReq.trim() === ""
  ) {
    throw new Error("Incorrect or missing description: " + descriptionForReq);
  }
  return descriptionForReq;
};

const isNumber = (num: any): num is number => {
  return typeof num === "number" || num instanceof Number;
};

const parsePrice = (priceForReq: any): number => {
  if (!priceForReq || !isNumber(priceForReq) || priceForReq < 0) {
    throw new Error("Incorrect or missing price: " + priceForReq);
  }
  return priceForReq;
};

const toNewProduct = (object: any): NewProduct => {
  const newProduct: NewProduct = {
    name: parseName(object.name),
    description: parseDescription(object.description),
    price: parsePrice(object.price),
  };
  return newProduct;
};

export default toNewProduct;
