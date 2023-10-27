import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShoppingCartProvider } from "./ShoppingCart";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { Checkout } from "./components/Checkout";
import { Success } from "./components/Success";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </main>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
