import express from "express";
import * as productServices from "../Services/productServices";
import toNewProduct from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(productServices.getProducstWithoutDescription());
});

router.get("/:id", (req, res) => {
  const product = productServices.getProductById(Number(req.params.id));
  return product ? res.send(product) : res.sendStatus(404);
});

router.post("/", (req, res) => {
  try {
    const newProduct = toNewProduct(req.body);

    const newProductAdded = productServices.addProduct(newProduct);

    res.send(newProductAdded);
  } catch (e) {
    const error: Error = e as Error;
    res.status(400).send(error.message);
  }
});

export default router;
