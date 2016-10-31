process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

const getPrimaryDiagonal = function getPrimaryDiagonal (matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    sum += parseInt(matrix[i][i]);
  }
  return sum;
}

const getSecondaryDiagonal = function getSecondaryDiagonal (matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    sum += parseInt(matrix[i][matrix.length - i - 1]);
  }
  return sum;
}

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
    }
    console.log(Math.abs(getPrimaryDiagonal(a) - getSecondaryDiagonal(a)));
}
