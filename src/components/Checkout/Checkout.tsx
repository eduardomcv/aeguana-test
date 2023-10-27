import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

import { useShoppingCart } from "../../hooks/useShoppingCart";
import { Divider } from "../Divider";
import { products } from "../../products";
import { formatCurrency } from "../../utils";

import "./Checkout.scss";

const DISCOUNTED_AMOUNT = 0.5;

export function Checkout() {
  const navigate = useNavigate();
  const { shoppingCart } = useShoppingCart();

  const shoppingCartArray = Array.from(shoppingCart);
  const total = shoppingCartArray.reduce((acc, [id, amount]) => {
    const product = products.find((product) => product.id === id)!;

    const total = product.price * amount;
    return acc + total;
  }, 0);

  function handleContinueShoppingClick() {
    navigate("/");
  }

  function handlePayClick() {
    navigate("/success");
  }

  return (
    <div className="checkout-container">
      <div className="order-container">
        <h1>Order summary</h1>
        <Divider />
        <ul className="shopping-cart">
          {shoppingCartArray.map(([id, amount]) => {
            const product = products.find((product) => product.id === id)!;

            return (
              <Fragment key={id}>
                <li className="cart-item">
                  <div className="product">
                    <div className="product-image" />
                    <span className="product-name">{product.name}</span>
                  </div>
                  <span>Qty: {amount}</span>
                  <span>{formatCurrency(amount * product.price)}</span>
                </li>
                <Divider />
              </Fragment>
            );
          })}
        </ul>
        <div className="total-container">
          <span className="discounts">
            Discounts {formatCurrency(-DISCOUNTED_AMOUNT)}
          </span>
          <span className="total">
            Total {formatCurrency(total - DISCOUNTED_AMOUNT)}{" "}
          </span>
        </div>
      </div>
      <div className="navigation-container">
        <Button color="secondary" onClick={handleContinueShoppingClick}>
          Continue shopping
        </Button>
        <Button onClick={handlePayClick}>Pay & collect</Button>
      </div>
    </div>
  );
}
