import { useShoppingCart } from "../../hooks/useShoppingCart";
import { Feedback } from "../Feedback";
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
            <li key={id}>
              <div className="product-image">
                <span className="amount">{amount}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="feedback">We would love your feedback</p>
        <Feedback />
        <p className="collect">Please collect your purchase</p>
        <Fridge />
      </div>
    </div>
  );
}
