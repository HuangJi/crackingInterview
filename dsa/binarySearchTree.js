function TreeNode(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

function BinarySearchTree(root) {
	this.root = root;
}

BinarySearchTree.prototype.insert = function(node) {
	var parentNode = new TreeNode(null);
	if (!this.root) {
		this.root = node;
	}
	else {
		var currentNode = this.root;
		while (currentNode) {
			parentNode = currentNode;
			if (node.value > currentNode.value) {
				currentNode = currentNode.right;
			}
			else {
				currentNode = currentNode.left;
			}
		}
		if (node.value > parentNode.value) {
			parentNode.right = node;
		}
		else {
			parentNode.left = node;
		}
	}
}

BinarySearchTree.prototype.remove = function(root, node) {
	if (!root) {
		return root;
	}
	if (node.value < root.value) {
		root.left = this.remove(root.left, node);
	}
	else if (node.value > root.value){
		root.right = this.remove(root.right, node);
	}
	else {
		//case 1: No child
		if (!root.left && !root.right) {
			root = null;
		}
		//case 2: One child
		else if (!root.left) {
			root = root.right;
		}
		else if (!root.right) {
			root = root.left;
		}
		//case 3: 2 children
		else {
			var temp = this.findMin(root.right)
			root.value = temp.value;
			root.right = this.remove(root.right, temp);
		}
	}
	return root;
}

BinarySearchTree.prototype.find = function(node) {
	if (this.root) {
		if (this.root.value == node.value) {
			console.log('Found it in root!');
			return root;
		}
		else {
			var currentNode = this.root;
			while (currentNode) {
				if (node.value > currentNode.value) {
					currentNode = currentNode.right;
				}
				else if (node.value < currentNode.value) {
					currentNode = currentNode.left;
				}
				else {
					console.log('Found it!');
					return currentNode;
				}
			}
			console.log('Not found!');
			return null;
		}
	}
	else {
		return null;
	}
}

BinarySearchTree.prototype.findMaxValue = function(root) {
	var max = root.value;
	if (root.left) {
		max = Math.max(max, this.findMaxValue(root.left));
	}
	if (root.right) {
		max = Math.max(max, this.findMaxValue(root.right));
	}
	return max;
}

BinarySearchTree.prototype.findMax = function(root) {
	if (!root.right) {
		return root;
	}
	else {
		return this.findMax(root.right)
	}
}

BinarySearchTree.prototype.findMinValue = function(root) {
	var min = root.value;
	if (root.right) {
		min = Math.min(min, this.findMinValue(root.right));
	}
	if (root.left) {
		min = Math.min(min, this.findMinValue(root.left));
	}
	return min;
}

BinarySearchTree.prototype.findMin = function(root) {
	if (!root.left) {
		return root;
	}
	else {
		return this.findMin(root.left)
	}
}

BinarySearchTree.prototype.preOrderPrint = function(node) {
	if (node) {
		process.stdout.write(`${node.value} `);
		if (node.left) {
			this.preOrderPrint(node.left);
		}
		if (node.right) {
			this.preOrderPrint(node.right);
		}
	}
	if (this.root == node) {
		console.log();
	}
}

BinarySearchTree.prototype.postOrderPrint = function(node) {
	if (node) {
		if (node.left) {
			this.postOrderPrint(node.left);
		}
		if (node.right) {
			this.postOrderPrint(node.right);
		}
		process.stdout.write(`${node.value} `);
	}
	if (this.root == node) {
		console.log();
	}
}

BinarySearchTree.prototype.inOrderPrint = function(node) {
	if (node) {
		if (node.left) {
			this.inOrderPrint(node.left);
		}
		process.stdout.write(`${node.value} `);
		if (node.right) {
			this.inOrderPrint(node.right);
		}
	}
	if (this.root == node) {
		console.log();
	}
}


var inputList = [13, 6, 4, 18, 49, 34, 27, 14];
// var inputList2 = [12, 9, 15, 3, 1, 10, 11, 14, 20];
var bst = new BinarySearchTree();
for (var i = 0; i < inputList.length; i++) {
	bst.insert(new TreeNode(inputList[i]));
}
// console.log(bst.root);
bst.preOrderPrint(bst.root);
// bst.inOrderPrint(bst.root);
// bst.postOrderPrint(bst.root);
// console.log('Max value is ' + bst.findMaxValue(bst.root));
// console.log('Max2 value is ' + bst.findMax(bst.root).value);
// console.log('Min2 value is ' + bst.findMin(bst.root).value);
// bst.find(new TreeNode(9));
// bst.find(new TreeNode(49));
bst.root = bst.remove(bst.root, new TreeNode(43));
if (bst.find(new TreeNode(4))) {
	console.log('11111');
}
bst.preOrderPrint(bst.root);

// bst.preOrderPrint(bst.root);
// bst.inOrderPrint(bst.root);
// bst.postOrderPrint(bst.root);