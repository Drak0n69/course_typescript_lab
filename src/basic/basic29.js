/* 
	Реализуйте функцию rotateArrayLeft(arr), которая сдвигает элементы массива влево на одну позицию с помощью методов shift и push. Предусмотрти случай, когда массив пустой.
*/

export function rotateArrayLeft(arr) {
  if (arr.length === 0) {
    return arr;
  }

  const firstElement = arr.shift();
  arr.push(firstElement);
  
  return arr;
}
