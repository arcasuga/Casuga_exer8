import { formatPrice } from "../utils.js";

// Shopping cart panel: lists the items in carts[], grouped with a quantity,
// and shows the total price.
function Cart({ items, onClear }) {
  // Group repeated items so "Add to cart" twice shows as quantity 2
  const grouped = items.reduce((list, item) => {
    const found = list.find((g) => g.id === item.id);
    if (found) {
      found.qty += 1;
    } else {
      list.push({ ...item, qty: 1 });
    }
    return list;
  }, []);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="cart">
      <h2>Shopping Cart</h2>

      {grouped.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          {grouped.map((item) => (
            <div className="cart-row" key={item.id}>
              <span>
                {item.name} x{item.qty}
              </span>
              <span>{formatPrice(item.price * item.qty)}</span>
            </div>
          ))}

          <div className="cart-row cart-total">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>

          <button className="clear-button" onClick={onClear}>
            Clear cart
          </button>
        </>
      )}
    </section>
  );
}

export default Cart;
