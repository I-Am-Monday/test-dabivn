import React from "react";
import { Product, ProductListsProps } from "../types/product";

const ProductLists: React.FC<ProductListsProps> = React.memo(
  ({ dataProducts }) => {
    return (
      <div className="product-list">
        {dataProducts.map((product: Product, index: number) => (
          <div key={`${product.id}_${index}`} className="product-card">
            <img
              className="product-thumbnail"
              src={product.thumbnail}
              alt={product.title}
            />
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
);

export default ProductLists;
