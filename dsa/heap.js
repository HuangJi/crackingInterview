var swap = function(data, i, j){ 
    var tmp = data[i];
    data[i] = data[j];
    data[j] = tmp;
};

// 令Root的左、右子樹皆符合Heap，僅Root不符合Heap，將樹調整為Max Heap
var heapify = function(data, root, length){
    var leftChild = root*2 + 1;	    // Root的左子元素
    var rightChild = root*2 + 2;    // Root的右子元素
    var maxNode = -1;
		
    // 找出root, leftChild, rightChild，值最大者(maNode)
    if(leftChild < length && (data[leftChild] > data[root]))
        maxNode = leftChild;
    else
        maxNode = root;	
    if(rightChild < length && (data[rightChild] > data[maxNode]))
        maxNode = rightChild;
	
    // 如果值最大者不是root，則作swap及heapify
    if(maxNode != root){
        swap(data, root, maxNode);
        heapify(data, maxNode, length);
    }	
};

var heapSort = function(data){
    //將數列轉換成Max Heap
    for(var i = Math.floor(data.length/2)-1; i >= 0; i--){
        heapify(data, i, data.length);
    }	
	
    //排序
    for(i = data.length - 1; i > 0; i--){
        swap(data, 0, i);
        heapify(data, 0, i);
    }
};

//執行
var data = [92,38,59,57,14,52,19,69,23,84];
heapSort(data);
console.log(data);