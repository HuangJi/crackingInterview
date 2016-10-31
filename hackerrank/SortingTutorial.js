const _ = require('lodash')

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''
let input_stdin_array = ''
let input_currentline = 0

process.stdin.on('data', (data) => {
  input_stdin += data
})

process.stdin.on('end', () => {
  input_stdin_array = input_stdin.split('\n')
  main()
})

function readLine() {
  return input_stdin_array[input_currentline++]
}

// ///////////// ignore above this line ////////////////////

function main() {
  const target = parseInt(readLine())
  const n = parseInt(readLine())
  let array = readLine().split(' ')
  array = _.map(array, _.parseInt)
  _.each(array, (e, index) => {
    if (e === target) {
      console.log(index)
    }
  })
  // console.log(array)
}
