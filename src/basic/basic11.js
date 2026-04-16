/* 
	Реализуйте функцию is_prime(n), которая проверяет, является ли число n простым. Простое число — это натуральное число больше единицы, которое делится только на 1 и само себя. Функция должна использовать цикл while.
*/

export function is_prime(n) {
	if (n <= 1) {
		return false;
	}

	if (n <= 3) {
		return true;
	}

	if (n % 2 === 0 || n % 3 === 0) {
		return false;
	}

	let i = 5;

	while (i * i <= n) {
		if (n % i === 0 || n % (i + 2) === 0) {
			return false;
		}

		i += 6;
	}

	return true;
}


