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

const kShift = function kShift (list) {
  let newList = [];
  newList.push(list[list.length - 1]);
  for (let i = 0; i < list.length - 1; i += 1) {
    newList.push(list[i]);
  }
  return newList;
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var q = parseInt(n_temp[2]);
    a = readLine().split(' ');
    a = a.map(Number);



    // console.log(a);
    // for (let i = 0; i < k; i += 1) {
    //   a = kShift(a);
    //   // console.log(a);
    // }
    //
    let table = new Array(n);
    for (let i = 0; i < n; i += 1) {
      table[(i + k) % n] = i;
    }
    // console.log('table is:' + table);
    for(var a0 = 0; a0 < q; a0++){
        var m = parseInt(readLine());
        console.log(a[table[m]]);
    }
    // console.log(a);
}
