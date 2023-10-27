import { useNavigate } from "react-router-dom";
import { products } from "../../products";
import { Button } from "../Button";
import { ProductCard } from "../ProductCard";
import "./ProductsList.scss";

export function ProductsList() {
  const navigate = useNavigate();

  function handleCheckoutClick() {
    navigate("/checkout");
  }

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <Button className="checkout-button" onClick={handleCheckoutClick}>
        Go to checkout
      </Button>
    </>
  );
}
