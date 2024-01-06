/** @format */

import ProductItem from "./ProductItem";

function ProductList({ title, items }) {
  return (
    <ul className='list'>
      {items.map((product) => (
        <ProductItem key={product.productName} product={product} />
      ))}
    </ul>
  );
}
export default ProductList;