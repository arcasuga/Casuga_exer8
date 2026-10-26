export default function CartItem({ item, onRemove }) {
  return (
    <li className="cart-item">
      <span className="cart-item-emoji">{item.emoji}</span>
      <div className="cart-item-info">
        <span className="cart-item-name">{item.name}</span>
        <span className="cart-item-price">₱{item.price.toLocaleString()}</span>
      </div>
      <button
        className="delete-button"
        onClick={() => onRemove(item.cartId)}
        aria-label={`Remove ${item.name}`}
      >
        Delete
      </button>
    </li>
  );
}
