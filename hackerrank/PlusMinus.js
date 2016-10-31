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

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    // arr = arr.map(Number);
    let table = [0, 0, 0]; // count of [positive, negative, zero].
    for (e of arr) {
      e = parseFloat(e);
      if (e > 0.0) {
        table[0] += 1.0;
      }
      else if (e < 0.0) {
        table[1] += 1.0;
      }
      else {
        table[2] += 1.0;
      }
    }
    console.log(table[0] / parseFloat(arr.length));
    console.log(table[1] / parseFloat(arr.length));
    console.log(table[2] / parseFloat(arr.length));
    // console.log(parseFloat(arr.length));

}
