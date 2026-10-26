import { formatPrice } from "../utils.js";

// Reusable product card: shows the product name, its price,
// and an "Add to cart" button (no picture).
function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card">
      <div className="card-info">
        <span className="product-name">{product.name}</span>
        <span className="product-price">{formatPrice(product.price)}</span>
      </div>

      {/* Sends this product up to App, which pushes it into carts[] */}
      <button onClick={() => onAddToCart(product)}>Add to cart</button>
    </div>
  );
}

export default ProductCard;
