/* 
	Реализуйте функцию splitAndMergeStrings(strArr), которая принимает массив строк, разбивает каждую строку пополам, затем соединяет полученные части обратно в один массив. При разбиении строк нечетной длины первая часть должна быть длины на 1 больше второй части. Строки из одно символа не должны разбиваться.
*/

export function splitAndMergeStrings(strArr) {
  const result = [];

  for (let i = 0; i < strArr.length; i++) {
    const str = strArr[i];
    let length = str.length;

    if (length <= 1) {
      result.push(str);
    } else {
      const middle = Math.ceil(length / 2);
      result.push(str.slice(0, middle));
      result.push(str.slice(middle));
    }
  }

  return result;
}