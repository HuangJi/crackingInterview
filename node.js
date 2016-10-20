function Node(data) {
	this.pre = null;
	this.next = null;
	this.data = data;
	this.appendToTail = function(data) {
		var tailNode = new Node(data, null);
		var currentNode = this;
		while(currentNode.next != null) {
			currentNode = currentNode.next;
		}
		currentNode.next = tailNode;
	}
	this.printTail = function() {
		var currentNode = this;
		while(currentNode.next != null) {
			currentNode = currentNode.next;
		}
		console.log(currentNode.data);
	}
	this.drawLinkedList = function() {
		var currentNode = this;
		while(currentNode.next != null) {
			process.stdout.write(`${currentNode.data} -> `);
			currentNode = currentNode.next;
		}
		process.stdout.write(`${currentNode.data}\n`);
	}
	this.deleteNode = function(node) {
		var currentNode = this;
		while(currentNode.next != null) {
			if (currentNode.next.data == node.data) {
				currentNode.next = currentNode.next.next;
			}
			currentNode = currentNode.next;
		}
	}
}

module.exports = Node;