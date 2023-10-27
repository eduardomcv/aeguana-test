import { useState } from "react";
import clsx from "clsx";

import { Product } from "../../products";
import { formatCurrency } from "../../utils";
import { Button } from "../Button";

import "./ProductCard.scss";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);

  function handleAddClick() {
    setIsAdding(true);
  }

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
        {!isAdding ? (
          <Button
            className="add-button"
            disabled={product.isOutOfStock}
            onClick={handleAddClick}
          >
            Add
          </Button>
        ) : (
          <div>adding</div>
        )}
      </div>
    </div>
  );
}
