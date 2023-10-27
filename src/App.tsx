import { ShoppingCartProvider } from "./ShoppingCart";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";

import "./App.scss";
import { Button } from "./components/Button";

function App() {
  function handleCheckoutClick() {
    console.log("go to checkout");
  }

  return (
    <ShoppingCartProvider>
      <Header />
      <main>
        <ProductsList />
        <Button className="checkout-button" onClick={handleCheckoutClick}>
          Go to checkout
        </Button>
      </main>
    </ShoppingCartProvider>
  );
}

export default App;
