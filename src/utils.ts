export function formatCurrency(price: number) {
  const intl = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "GBP",
  });

  return intl.format(price);
}
