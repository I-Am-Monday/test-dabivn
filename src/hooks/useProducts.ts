import { useState, useEffect, useCallback } from "react";
import productApi from "../shared/api/productApi";
import { Product } from "../types/product";

export function useProducts() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isBottom, setIsBottom] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [noResults, setNoResults] = useState<boolean>(false);

  const fetchProducts = useCallback(async () => {
    if (searchQuery) return;

    setLoading(true);
    try {
      const limit = 20;
      const offset = page * 20;
      const response = await productApi.getProducts(limit, offset);

      if (response.data.products.length > 0) {
        setProducts((prevProducts) => [
          ...prevProducts,
          ...response.data.products,
        ]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [page, searchQuery]);

  const handleSearch = useCallback(async (query: string) => {
    setSearchQuery(query);
    setPage(0);
    setProducts([]); //
    setNoResults(false);

    if (query === "") return;

    setLoading(true);
    try {
      const response = await productApi.searchProducts(query);
      if (response.data.products.length === 0) {
        setNoResults(true);
      }
      setProducts(response.data.products);
      setHasMore(false);
    } catch (error) {
      console.error("Error searching products:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
  
    // Sử dụng so sánh gần đúng
    if (Math.abs(scrollTop + clientHeight - scrollHeight) < 1 && hasMore && !loading && !searchQuery) {
      setIsBottom(true);
      setPage(prevPage => prevPage + 1);
    } else {
      setIsBottom(false);
    }
  }, [hasMore, loading, searchQuery]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (!searchQuery) {
      fetchProducts();
    }
  }, [page, searchQuery, fetchProducts]);

  return {
    searchQuery,
    setSearchQuery,
    products,
    loading,
    isBottom,
    noResults,
    handleSearch,
  };
}
