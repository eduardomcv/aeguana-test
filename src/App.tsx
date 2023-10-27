import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShoppingCartProvider } from "./ShoppingCart";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { Checkout } from "./components/Checkout";

import "./App.scss";

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </main>
    </ShoppingCartProvider>
  );
}

export default App;
