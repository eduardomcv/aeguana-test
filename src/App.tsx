import { ShoppingCartProvider } from "./ShoppingCart";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";

import "./App.scss";

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <main>
        <ProductsList />
      </main>
    </ShoppingCartProvider>
  );
}

export default App;
