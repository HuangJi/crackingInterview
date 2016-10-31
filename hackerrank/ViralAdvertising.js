function processData(input) {
    //Enter your code here
    let n = parseInt(input);
    // console.log(typeof n);
    let todayLikeAmount;
    let likeSum = 0;
    for (let i = 1; i < n + 1; i += 1) {
      if (i === 1) {
        todayLikeAmount = Math.floor(5 / 2);
        likeSum += todayLikeAmount;
      } else {
        todayLikeAmount = Math.floor(todayLikeAmount * 3 / 2);
        likeSum += todayLikeAmount;
      }
      // console.log(`todayLikeAmount is ${todayLikeAmount}`);
    }
    console.log(likeSum);
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
