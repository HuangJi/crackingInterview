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
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);

    if (v1 === v2) {
      console.log('NO');
    } else {
      let faster, slower;
      let k1 = { x: x1, v: v1 };
      let k2 = { x: x2, v: v2 };

      if (k1.v > k2.v) {
        [faster, slower] = [k1, k2];
      } else {
        [faster, slower] = [k2, k1];
      }

      if (faster.x > slower.x) {
        console.log('NO');
      } else {
        let deltaX = slower.x - faster.x;
        let deltaV = faster.v - slower.v;
        if (deltaX > 0 && deltaX % deltaV === 0) {
          console.log('YES');
        } else {
          console.log('NO');
        }
      }
    }

}
