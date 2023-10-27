import clsx from "clsx";

import { useShoppingCart } from "../../hooks/useShoppingCart";
import { Product } from "../../products";
import { formatCurrency } from "../../utils";
import { Button } from "../Button";

import "./ProductCard.scss";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [shoppingCart, updateCart] = useShoppingCart();

  function handleAddClick() {
    updateCart({
      productId: product.id,
      type: "increment",
    });
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
        {!shoppingCart.has(product.id) ? (
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
