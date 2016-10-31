var Node = require('./node.js')

function Stack(node) {
	this.top = node;
	this.isEmpty = false;
}

Stack.prototype.pop = function() {
	var item = this.top.data;
	this.top = this.top.next;
	return item;
}

Stack.prototype.push = function(node) {
	if (this.isEmpty) {
		this.top = node;
	}
	else {
		node.next = this.top;
		this.top = node;
	}
}

Stack.prototype.drawStack = function() {
	var currentElement = this.top;
	while(currentElement.next != null) {
		process.stdout.write(`${currentElement.data}-> `);
		currentElement = currentElement.next;
	}
	process.stdout.write(`${currentElement.data}\n`);
}

var stack = new Stack(new Node(0));



// var root = new Node(0);
for (var i = 1; i < 10; i++) {
	stack.push(new Node(i));
}
// stack.push(new Node(3));
stack.drawStack();
stack.pop();
stack.drawStack();
// console.log(root.next.next.next.data);
// root.printTail();
// root.drawLinkedList();
// var node = new Node(3);
// root.deleteNode(node);
// root.drawLinkedList();