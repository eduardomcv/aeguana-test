import clsx from "clsx";
import { Product } from "../../products";
import { formatCurrency } from "../../utils";

import "./ProductCard.scss";
import { Button } from "../Button";

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
        <span>{formatCurrency(product.price)}</span>
        <Button className="add-button" disabled={product.isOutOfStock}>
          Add
        </Button>
      </div>
    </div>
  );
}
