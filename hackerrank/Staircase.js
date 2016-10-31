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

const printSymbol = function printSymbol(n, symbol) {
  for (let i = 0; i < n; i += 1) {
    process.stdout.write(symbol)
  }
}

function main() {
  const n = parseInt(readLine().split(' ')[2])
  for (let i = 0; i < n; i += 1) {
    printSymbol(n - i - 1, ' ')
    printSymbol(i + 1, '#')
    if (i < n - 1) {
      console.log()
    }
  }
}
