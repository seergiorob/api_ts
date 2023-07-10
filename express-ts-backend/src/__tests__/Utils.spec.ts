import toNewProduct from "../utils";

describe("toNewProduct", () => {
  test("Should throw an error if name is not provided", () => {
    expect(() => toNewProduct({ description: "desc", price: 10 })).toThrow(
      "Incorrect or missing name"
    );
  });

  test("Should throw an error if description is not provided", () => {
    expect(() => toNewProduct({ name: "product", price: 10 })).toThrow(
      "Incorrect or missing description"
    );
  });

  test("Should throw an error if price is not provided", () => {
    expect(() =>
      toNewProduct({ name: "product", description: "desc" })
    ).toThrow("Incorrect or missing price");
  });

  test("Should throw an error if name is not a string", () => {
    expect(() =>
      toNewProduct({ name: 123, description: "desc", price: 10 })
    ).toThrow("Incorrect or missing name");
  });

  test("Should throw an error if description is not a string", () => {
    expect(() =>
      toNewProduct({ name: "product", description: 123, price: 10 })
    ).toThrow("Incorrect or missing description");
  });

  test("Should throw an error if price is not a number", () => {
    expect(() =>
      toNewProduct({ name: "product", description: "desc", price: "10" })
    ).toThrow("Incorrect or missing price");
  });

  test("Should correctly create a new product when correct arguments are provided", () => {
    const newProduct = toNewProduct({
      name: "product",
      description: "desc",
      price: 10,
    });

    expect(newProduct).toEqual({
      name: "product",
      description: "desc",
      price: 10,
    });
  });
  test("Should throw an error if name is an empty string", () => {
    expect(() =>
      toNewProduct({ name: "", description: "desc", price: 10 })
    ).toThrow("Incorrect or missing name");
  });

  test("Should throw an error if description is an empty string", () => {
    expect(() =>
      toNewProduct({ name: "product", description: "", price: 10 })
    ).toThrow("Incorrect or missing description");
  });

  test("Should throw an error if price is negative", () => {
    expect(() =>
      toNewProduct({ name: "product", description: "desc", price: -10 })
    ).toThrow("Incorrect or missing price");
  });
});
