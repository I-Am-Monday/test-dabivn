import "./App.css";
import ProductLists from "./components/ProductLists";
import Search from "./components/Search";
import { useProducts } from "./hooks/useProducts"; // Import custom hook

function App() {
  const { products, loading, noResults, handleSearch } = useProducts();

  const loadingMessage = loading && products.length === 0 ? <p>Loading...</p> : null;
  const noResultsMessage = noResults ? <p>There are no products matching your search keywords.</p> : null;

  return (
    <main>
      <Search onSearch={handleSearch} />
      {loadingMessage}
      {noResultsMessage}
      <ProductLists dataProducts={products} />
    </main>
  );
}

export default App;
