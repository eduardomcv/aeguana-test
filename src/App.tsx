import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <ProductsList />
      </main>
    </>
  );
}

export default App;
