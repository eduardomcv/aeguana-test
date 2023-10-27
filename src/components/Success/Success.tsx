import { useShoppingCart } from "../../hooks/useShoppingCart";
import { Fridge } from "../Fridge";
import "./Success.scss";

export function Success() {
  const { shoppingCart } = useShoppingCart();

  return (
    <div className="success-background">
      <div className="success-container">
        <h1>Success</h1>
        <ul className="shopping-cart">
          {Array.from(shoppingCart).map(([id, amount]) => (
            <li key={id}>asd</li>
          ))}
        </ul>
        <p className="feedback">We would love your feedback</p>
        <div>stars</div>
        <p className="collect">Please collect your purchase</p>
        <div>
          <Fridge />
        </div>
      </div>
    </div>
  );
}
