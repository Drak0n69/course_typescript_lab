/* 
	Реализуйте функцию sum_positive(arr), которая складывает положительные элементы массива. Функция не должна использовать функции высших порядков, можно использовать циклы while или for.
*/

export function sum_positive(arr) {
	let sum = 0;
	
	for (const item of arr) {
		if (item > 0) {
			sum += item;
		}
	}

	return sum;
}