import ProductCard from "./ProductCard.jsx";

// Body of the homepage
function ProductList({ products, onAddToCart }) {
  return (
    <main className="products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </main>
  );
}

export default ProductList;