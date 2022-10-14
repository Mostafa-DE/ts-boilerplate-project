/**
 *
 * Calculate the difference between two numbers
 *
 * @param a - first number
 * @param b - second number
 *
 * @beta
 */

export function subtract(a: number, b = 0): number {
  return a - b;
}

declare const el: HTMLButtonElement;

el.addEventListener("click", function () {
  console.log(this.classList);
});
