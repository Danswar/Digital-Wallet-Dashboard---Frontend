export function formatNumber(input: string) {
  const num = parseFloat(input);

  if (isNaN(num) || !isFinite(num)) {
    return input;
  }

  const roundedNum = +num.toFixed(
    Math.min(2, (num.toString().split(".")[1] || []).length)
  );
  return roundedNum.toString();
}
