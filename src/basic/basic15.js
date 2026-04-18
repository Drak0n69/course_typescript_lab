/* 
	Напишите функцию swap_first_last(arr), меняющую местами первый и последний элемент массива. Функция не должна использовать функции высших порядков и оператор ..., также она не должна изменять исходный массив, можно использовать циклы while или for.
*/

export function swap_first_last(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }

    if (newArr.length > 1) {
        let first = newArr[0];
        newArr[0] = newArr[newArr.length - 1];
        newArr[newArr.length - 1] = first;
    }

    return newArr;
}