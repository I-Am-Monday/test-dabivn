export interface Product {
  id?: number;
  title?: string;
  description?: string;
  category?: string;
  price?: number;
  thumbnail?: string;
}

export interface ProductListsProps {
  dataProducts: Product[];
}

export interface SearchProps {
  onSearch: (query: string) => void;
}
