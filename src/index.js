
// You should implement your task here.

module.exports = function towelSort (matrix=[]) {
  let sortMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (i % 2 === 0) {
            sortMatrix.push(matrix[i][j]);
        } else {
            sortMatrix.push(matrix[i][matrix[i].length - j - 1]);
        }
    }
  }
  return sortMatrix;
}

