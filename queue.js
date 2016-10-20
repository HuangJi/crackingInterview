function Queue() {
	this.front = this.back = null;
}

Queue.prototype.enqueue = function(node) {
	if (!this.front) {
		this.front = node;
		this.back = node;
	}
	else {
		this.back.next = node;
		this.back = node;
	}
}

Queue.prototype.dequeue = function() {
	if (!this.front) {
		console.error('empty!');
	}
	else {
		var node = this.front;
		this.front = this.front.next;
		return node;
	}
}

Queue.prototype.isEmpty = function() {
	if (!this.front) {
		return true;
	}
	else {
		return false;
	}
}

Queue.prototype.drawQueue = function() {
	var currentElement = this.front;
	while(currentElement.next != null) {
		process.stdout.write(`${currentElement.value}-> `);
		currentElement = currentElement.next;
	}
	process.stdout.write(`${currentElement.value}\n`);
}

module.exports = Queue;