export function formatNumber(input: string | number) {
  const num = typeof input === "number" ? input : parseFloat(input);

  if (isNaN(num) || !isFinite(num)) {
    return 0;
  }

  const roundedNum = +num.toFixed(
    Math.min(2, (num.toString().split(".")[1] || []).length)
  );
  return roundedNum.toString();
}
