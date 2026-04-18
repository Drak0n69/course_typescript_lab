/* 
	Напишите функцию average(arr), которая рассчитывает среднее арифметическое элементов массива. Функция не должна использовать функции высших порядков, можно использовать циклы while или for.
*/

export function average(arr) {
	let lenth = arr.length;
	let sum = 0;

	for (let i = 0; i < lenth; i++) {
		sum += arr[i];
	}

	return sum / lenth;
}