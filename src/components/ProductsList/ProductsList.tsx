import { products } from "../../products";
import { ProductCard } from "../ProductCard";
import "./ProductsList.scss";

export function ProductsList() {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
