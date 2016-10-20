function Vertex(name, value) {
	this.name = name;
	this.value = value;
	this.color = null;
	this.parent = null;
	this.discover = null;
	this.finish = null;
	this.adjacent = [];
}

Vertex.prototype.addAdjacent = function(vertex) {
	this.adjacent.push(vertex);
}

function Graph() {
	this.vertices = [];
	this.time = 0;
}

Graph.prototype.addVertex = function(vertex) {
	this.vertices.push(vertex);
}

Graph.prototype.dfs = function(sourceVertex) {
	this.vertices.forEach(function(element, index) {
		element.color = 'white';
		element.parent = null;
	});
	this.time = 0;
	this.dfsVisit(sourceVertex);
	var self = this;
	this.vertices.forEach(function(element, index) {
		if (element.color == 'white') {
			self.dfsVisit(element);
		}
	});
}

Graph.prototype.dfsVisit = function(vertex) {
	this.time = this.time + 1;
	vertex.discover = this.time;
	vertex.color = 'gray';
	var self = this;
	vertex.adjacent.forEach(function(element, i) {
		if (element.color == 'white') {
			element.parent = vertex;
			self.dfsVisit(element);
		}
	});
	vertex.color = 'black';
	this.time = this.time + 1;
	vertex.finish = this.time;
}

Graph.prototype.drawGraph = function() {
	this.vertices.forEach(function(e, i) {
		console.log(e);
	});
}

var graph = new Graph();
var r = new Vertex('r');
var s = new Vertex('s');
var t = new Vertex('t');
var u = new Vertex('u');
var v = new Vertex('v');
var w = new Vertex('w');
var x = new Vertex('x');
var y = new Vertex('y');
var z = new Vertex('z');

r.addAdjacent(v);
r.addAdjacent(s);

s.addAdjacent(r);
s.addAdjacent(w);

t.addAdjacent(w);
t.addAdjacent(x);
t.addAdjacent(u);

u.addAdjacent(t);
u.addAdjacent(x);
u.addAdjacent(y);

v.addAdjacent(r);

w.addAdjacent(s);
w.addAdjacent(t);
w.addAdjacent(x);

x.addAdjacent(w);
x.addAdjacent(t);
x.addAdjacent(u);
x.addAdjacent(y);

y.addAdjacent(x);
y.addAdjacent(u);



// v.addAdjacent(u);
// v.addAdjacent(y);
// v.addAdjacent(z);
// w.addAdjacent(z);
// x.addAdjacent(y);
// y.addAdjacent(x);
// y.addAdjacent(v);
// z.addAdjacent(v);
// z.addAdjacent(w);

// console.log(v);
// console.log(y);

graph.addVertex(r);
graph.addVertex(s);
graph.addVertex(t);
graph.addVertex(u);
graph.addVertex(v);
graph.addVertex(w);
graph.addVertex(x);
graph.addVertex(y);
// graph.addVertex(z);

// console.log(graph);

graph.dfs(u);
console.log(graph.vertices);





