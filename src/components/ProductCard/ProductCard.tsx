import { Product } from "../../products";
import clsx from "clsx";

import "./ProductCard.scss";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="container">
      <div
        className={clsx("product-image", {
          "out-of-stock": product.isOutOfStock,
        })}
      >
        {product.isOutOfStock && <span>Out of stock, sorry!</span>}
      </div>
      <span className="product-name">{product.name}</span>
      <div className="price-container">
        <span>€{product.price}</span>
        <button>Add</button>
      </div>
    </div>
  );
}
