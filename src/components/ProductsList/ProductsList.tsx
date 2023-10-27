import { useNavigate } from "react-router-dom";
import { products } from "../../products";
import { Button } from "../Button";
import { ProductCard } from "../ProductCard";
import "./ProductsList.scss";
import { useShoppingCart } from "../../hooks/useShoppingCart";

export function ProductsList() {
  const navigate = useNavigate();
  const { shoppingCart } = useShoppingCart();

  function handleCheckoutClick() {
    navigate("/checkout");
  }

  return (
    <>
      <ul className="products-list">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <Button
        className="checkout-button"
        onClick={handleCheckoutClick}
        disabled={shoppingCart.size === 0}
      >
        Go to checkout
      </Button>
    </>
  );
}
