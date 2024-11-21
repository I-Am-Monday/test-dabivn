import instance from "./httpClient";


const getProducts=(limit:number,skip:number) =>{
    return instance.get(`/products?limit=${limit}&skip=${skip}`)
}

const searchProducts = (query: string) => {
    return instance.get(`https://dummyjson.com/products/search?q=${query}`);
  };
export default {
    getProducts,
    searchProducts
}