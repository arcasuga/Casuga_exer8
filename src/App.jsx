import { useState } from "react";
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";

// Navigation menu data. Each item becomes one NavButton component.
const menus = [
  { name: "Appliances", url: "#", id: 1 },
  { name: "Gadgets", url: "#", id: 2 },
  { name: "Accessories", url: "#", id: 3 },
];

// Product data shown on the homepage (price is in pesos).
const products = [
  { id: 1, name: "Electric Fan", category: "Appliances", price: 1299 },
  { id: 2, name: "Wireless Earbuds", category: "Gadgets", price: 899 },
  { id: 3, name: "Phone Case", category: "Accessories", price: 249 },
  { id: 4, name: "Power Bank 10000mAh", category: "Gadgets", price: 699 },
];

function App() {
  // Currently selected category ("" means show all products)
  const [category, setCategory] = useState("");

  // The carts[] array. It is kept in state so the cart on screen updates.
  const [carts, setCarts] = useState([]);

  // Whether the cart panel is visible
  const [cartOpen, setCartOpen] = useState(false);

  // Add the chosen product to carts[] and log the result in the console
  const handleAddToCart = (product) => {
    const updated = [...carts, product];
    setCarts(updated);
    console.log("Added to cart:", product.name);
    console.log("carts[]:", updated);
  };

  // Empty the cart
  const handleClearCart = () => {
    setCarts([]);
    console.log("carts[]:", []);
  };

  // Show only products of the selected category (or all if none selected)
  const visibleProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="frame">
      <Header
        title="Lazado"
        menus={menus}
        activeCategory={category}
        onSelect={setCategory}
        cartCount={carts.length}
        cartOpen={cartOpen}
        onCartToggle={() => setCartOpen(!cartOpen)}
      />

      {cartOpen && <Cart items={carts} onClear={handleClearCart} />}

      <ProductList products={visibleProducts} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
