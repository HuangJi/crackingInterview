class Vertex {
  constructor(name, value) {
    this.name = name
    this.value = value
    this.color = null
    this.parent = null
    this.discover = null
    this.finish = null
    this.adjacent = []
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

  drawGraph() {
    this.vertices.forEach((e) => {
      console.log(e)
    })
  }
}

module.exports = Graph
