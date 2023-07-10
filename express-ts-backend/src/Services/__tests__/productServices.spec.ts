import * as productServices from "../productServices";
import productsData from "../products.json";

test("Should get all the products", () => {
  const products = productServices.getProducts();
  expect(products).toEqual(productsData);
});

test("Should get all the products without description", () => {
  const products = productServices.getProducstWithoutDescription();
  products.forEach((product) => {
    expect(product).not.toHaveProperty("description");
  });
});

test("Should get a product by id", () => {
  const product = productServices.getProductById(1);
  expect(product).toEqual(productsData.find((p) => p.id === 1));
});

test("should add a new product", () => {
  const newProduct = {
    name: "new product",
    description: "new description",
    price: 20,
  };

  const addedProduct = productServices.addProduct(newProduct);

  expect(addedProduct.id).toBeGreaterThan(0);
  expect(addedProduct.name).toBe(newProduct.name);
  expect(addedProduct.description).toBe(newProduct.description);
  expect(addedProduct.price).toBe(newProduct.price);
});
