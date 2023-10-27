interface Product {
  id: string;
  name: string;
  price: string;
  isOutOfStock: boolean;
}

/**
 * Placeholder product data
 */
export const products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    price: "12.99",
    isOutOfStock: false,
  },
  {
    id: "2",
    name: "Product 2",
    price: "5.99",
    isOutOfStock: true,
  },
  {
    id: "3",
    name: "Product 3",
    price: "5.99",
    isOutOfStock: false,
  },
  {
    id: "4",
    name: "Product 4",
    price: "12.99",
    isOutOfStock: false,
  },
  {
    id: "5",
    name: "Product 5",
    price: "5.99",
    isOutOfStock: true,
  },
  {
    id: "6",
    name: "Product 6",
    price: "12.99",
    isOutOfStock: false,
  },
];
