/* 
	Реализовать функцию sum_digits(num), которая суммирует цифры целого положительного числа num. Например, sum_digits(1234) вернёт 1 + 2 + 3 + 4 = 10. Функция должна использовать цикл while и не должна использовать преобразования числа в строку.
*/

export function sum_digits(num) {
  let sum = 0;

  while (num > 0) {
    const digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }

  return sum;
}