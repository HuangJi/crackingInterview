var Queue = require('./queue.js');

function TreeNode(value) {
	this.value = value;
	this.left = null;
	this.right = null;
	this.next = null;
}

function BinarySearchTree(root) {
	this.root = root;
}

function bstVisit(root) {
	if (!root) {
		console.log('root cannot be null!');
	}
	else {
		var queue = new Queue();
		queue.enqueue(root);
		while (!queue.isEmpty()) {
			// queue.drawQueue();
			var node = queue.dequeue();
			process.stdout.write(`${node.value} `);
			if (node.left) {
				queue.enqueue(node.left);
			}
			if (node.right) {
				queue.enqueue(node.right);
			}
		}
		console.log();
	}
}

var bst = new BinarySearchTree(new TreeNode(1));
bst.root.left = new TreeNode(2);
bst.root.right = new TreeNode(3);

bst.root.left.left = new TreeNode(4);
bst.root.left.right = new TreeNode(5);

bst.root.right.left = new TreeNode(6);
bst.root.right.right = new TreeNode(7);

bstVisit(bst.root);