function Node(value) {
	this.value = value;
	this.next = null;
}

function LinkedList() {
	this.root = null;
}

LinkedList.prototype.append = function(node) {
	if (this.root) {
		var cur = this.root;
		while(cur.next) {
			cur = cur.next;
		}
		cur.next = node;
	}
	else {
		this.root = node;
	}
}

LinkedList.prototype.drawLinkedList = function() {
	var cur = this.root;
		while(cur.next) {
			process.stdout.write(`${cur.value} -> `);
			cur = cur.next;
		}
		process.stdout.write(`${cur.value}\n`);
}

var linkedList = new LinkedList();
// linkedList.append(new Node(9));
console.log(linkedList.root);
for (var i = 0; i < 10; i++) {
	linkedList.append(new Node(i));	
}

linkedList.drawLinkedList();
