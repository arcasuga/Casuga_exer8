// Formats a number as Philippine pesos, e.g. 1299 -> "₱1,299.00"
export function formatPrice(amount) {
  return amount.toLocaleString("en-PH", {
    style: "currency",
    currency: "PHP",
  });
}