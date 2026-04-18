/* 
	Реализуйте функцию removeDuplicates(arr), которая удаляет повторяющиеся элементы из массива с помощью методов indexOf и push.
*/

export function removeDuplicates(arr) {
	const uniqueArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (uniqueArr.indexOf(arr[i]) === -1) {
			uniqueArr.push(arr[i]);
		}
	}
	
	return uniqueArr;
}
