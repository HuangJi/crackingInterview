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
    var time = readLine();
    let apm = time.substr(8, 2);
    let answer;
    let hour;
    if (apm === 'AM') {
      if (time.substr(0, 2) === '12') {
        answer = '00' + time.substr(2, 6);
      }
      else {
        answer = time.substr(0, 8);
      }
    } else if (apm === 'PM') {
      if (time.substr(0, 2) === '12') {
        answer = time.substr(0, 8);
      }
      else {
        hour = parseInt(time.substr(0, 2)) + 12;
        answer = hour + time.substr(2, 6);
      }
    } else {
      console.error('error');
    }
    console.log(answer);
}
