import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

import "./Checkout.scss";

export function Checkout() {
  const navigate = useNavigate();

  function handleContinueShoppingClick() {
    navigate("/");
  }

  function handlePayClick() {
    navigate("/success");
  }

  return (
    <>
      <div className="order-container">
        <h1>Order summary</h1>
        <hr />
      </div>
      <div className="navigation-container">
        <Button color="secondary" onClick={handleContinueShoppingClick}>
          Continue shopping
        </Button>
        <Button onClick={handlePayClick}>Pay & collect</Button>
      </div>
    </>
  );
}
