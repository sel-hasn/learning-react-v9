export default async function getPastOrder(order) {
  const response = await fetch(`/api/pas-order/${order}`);
  const data = await response.json();
  return data;
}
