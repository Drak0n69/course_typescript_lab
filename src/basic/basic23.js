/* 
	Напишите функцию strip_special_chars(text), которая удаляет из текста все специальные символы и оставляет только буквы и пробелы.
	Подсказка: для проверки символа можно использовать константу 
	const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
*/

export function strip_special_chars(text) {
	const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
	let result = '';
	
	for (const char of text) {
		if (allowed.includes(char)) {
			result += char;
		}
	}

	return result;
}