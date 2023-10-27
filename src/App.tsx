import { ShoppingCartProvider } from "./ShoppingCart";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";

import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductsList />} />
          </Routes>
        </BrowserRouter>
      </main>
    </ShoppingCartProvider>
  );
}

export default App;
