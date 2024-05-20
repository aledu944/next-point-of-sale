// ACTIONS
export { getAllProducts } from "./actions/get-all-products";
export { createProduct } from "./actions/create-product";
export { getProductsByCategory } from './actions/get-products-by-category';
export { deleteProduct } from "./actions/delete-product";

// COMPONENTS
export { NewProuductForm } from "./components/NewProuductForm";
export { ProductCard } from './components/product-list/ProductCard';
export { ProductList } from './components/product-list/ProductList';
export { ProductTable } from "./components/product-table/ProductTable";
export { DeleteProductModal } from "./components/product-table/DeleteProductModal";



// INTERFACES
export type { IProduct } from './interfaces/simple-product';


