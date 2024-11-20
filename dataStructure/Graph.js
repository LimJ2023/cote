class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertext(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1].filter((e) => e !== v2);
    this.adjacencyList[v2].filter((e) => e !== v1);
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();
graph.addVertext("Tokyo");
graph.addVertext("Dallas");
graph.addVertext("Aspen");
graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Aspen", "Dallas");
