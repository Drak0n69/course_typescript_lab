/* 
	Реализуйте функцию insertAtPosition(arr, pos, elem), которая вставляет новый элемент в указанную позицию массива с помощью методов slice и concat.
*/

export function insertAtPosition(arr, pos, elem) {
  const before = arr.slice(0, pos);
  const after = arr.slice(pos);

  return before.concat(elem, after);
}
