/* 
	Реализуйте функцию zeroRowColumn(matrix, row, col), которая превращает в ноль всю строку и весь столбец матрицы, соответствующие указанным индексам.
*/

export function zeroRowColumn(matrix, row, col) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0;
    }
    
    for (let j = 0; j < matrix[0].length; j++) {
        matrix[row][j] = 0;
    }

    return matrix;
}