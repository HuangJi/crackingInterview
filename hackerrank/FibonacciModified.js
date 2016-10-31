const BigNumber = require('bignumber.js');

function processData(input) {
    //Enter your code here
    // console.log(input.split(' ')[2]);
    const n = parseInt(input.split(' ')[2]);
    let table = new Array(21);
    table[1] = new BigNumber(parseInt(input.split(' ')[0]));
    table[2] = new BigNumber(parseInt(input.split(' ')[1]));
    for (let i = 3; i < n + 1; i += 1) {
      table[i] = table[i - 2].plus(table[i - 1].times(table[i - 1]));
    }
    var parts = table[n].toString().split("e+");
    var first = parts[0].replace('.', "");
    var zeroes = parseInt(parts[1], 10) - (first.length - 1);
    for(var i = 0; i < zeroes; i++){ first += "0"; }
    // console.log(table[n].toString());
    console.log(first);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
