class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.back = null
    this.front = null
  }

  enqueue(node) {
    if (!this.front) {
      this.front = node
      this.back = node
    } else {
      this.back.next = node
      this.back = node
    }
  }

  dequeue() {
    if (!this.front) {
      console.error('empty!')
    } else {
      const node = this.front
      this.front = this.front.next
      return node
    }
    return null
  }

  isEmpty() {
    if (!this.front) {
      return true
    }
    return false
  }

  drawQueue() {
    let currentElement = this.front
    while (currentElement.next != null) {
      process.stdout.write(`${currentElement.value} <- `)
      currentElement = currentElement.next
    }
    process.stdout.write(`${currentElement.value}\n`)
  }
}

const q = new Queue()
q.enqueue(new Node(3))
q.enqueue(new Node(4))
q.enqueue(new Node(7))
q.enqueue(new Node(8))
q.enqueue(new Node(9))
q.dequeue()
q.enqueue(new Node(19))

q.drawQueue()
