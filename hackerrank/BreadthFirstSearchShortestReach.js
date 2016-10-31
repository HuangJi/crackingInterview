const _ = require('lodash')

class Vertex {
  constructor(name, value) {
    this.name = name
    this.value = value
    this.color = 'white'
    this.parent = null
    this.discover = null
    this.finish = null
    this.adjacent = []
    this.distance = 0
  }

  addAdjacent(vertex) {
    this.adjacent.push(vertex)
  }
}

class Graph {
  constructor() {
    this.vertices = []
    this.time = 0
  }

  addVertex(vertex) {
    this.vertices.push(vertex)
  }

  addVertices(vertexList) {
    let vertex
    for (vertex of vertexList) {
      this.vertices.push(vertex)
    }
  }

  drawGraph() {
    this.vertices.forEach((e) => {
      console.log(e)
    })
  }
}

let inputStdin = ''
let inputStdinArray = ''
let inputCurrentline = 0

function readLine() {
  inputCurrentline += 1
  return inputStdinArray[inputCurrentline - 1]
}

function processData() {
  const n = parseInt(readLine(), 10)
  let edgeAmount
  let nodeAmount
  let nelist
  let source
  for (let i = 0; i < n; i += 1) {
    nelist = readLine().split(' ')
    edgeAmount = parseInt(nelist[1], 10)
    nodeAmount = parseInt(nelist[0], 10)
    const graph = new Graph()
    for (let k = 0; k < nodeAmount; k += 1) {
      graph.addVertex(new Vertex((k + 1).toString(), k + 1))
    }
    for (let j = 0; j < edgeAmount + 1; j += 1) {
      if (j === edgeAmount) {
        const sourceValue = parseInt(readLine().replace(/\r\n/, ''), 10)
        source = _.find(graph.vertices, v => v.value === sourceValue)
      } else {
        const edgeList = readLine().replace(/\r/, '').split(' ')
        const v1 = _.find(graph.vertices, v => v.name === edgeList[0])
        const v2 = _.find(graph.vertices, v => v.name === edgeList[1])
        v1.addAdjacent(v2)
        v2.addAdjacent(v1)
      }
    }
    // BFS start!
    const queue = []
    queue.push(source)

    while (queue.length !== 0) {
      const node = queue.shift()
      _.forEach(node.adjacent, (v) => {
        if (v.color === 'white') {
          v.distance += 6 + node.distance
          v.color = 'black'
          queue.push(v)
        }
      })
    }

    _.forEach(graph.vertices, (v, index) => {
      if (v.distance === 0) {
        v.distance = -1
      }
      if (v !== source) {
        if (index !== graph.vertices.length - 1) {
          process.stdout.write(`${v.distance} `)
        } else {
          process.stdout.write(`${v.distance}\n`)
        }
      }
    })
  }
}

process.stdin.resume()
process.stdin.setEncoding('ascii')
process.stdin.on('data', (input) => {
  inputStdin += input
})

process.stdin.on('end', () => {
  inputStdinArray = inputStdin.split('\n')
  processData(inputStdinArray)
})
