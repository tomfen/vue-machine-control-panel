export function celciusToFahrenheit(value: number) {
  return 32 + value * (9 / 5);
}

export function roundFloat(value: number, places = 2) {
  return parseFloat(value.toFixed(places));
}
