// find starting item in the graph
// add starting item to visited & results & queue
// while queue not empty
// get the list of adjacencies
// if adjacencies unvisited, put list of adjacencies in queue. 
// pull items out of the queue and repeat, including putting them in visited and results.

const breadthFirstTraversal = (startingItem, graph) => {
const adjacencyList = makeAdjacencyList(graph);
const res = [];
const visited = new Set();
const queue = [];
queue.push(startingItem);
while (queue.length > 0) {
    let current = queue.shift();
    if (!visited.has(current)) {
        res.push(current);
        visited.add(current);
    }
    let neighbors = adjacencyList[current];
    neighbors.forEach(neighbor => {
        if (!visited.has(neighbor)) {
            queue.push(neighbor);
        }
    });
}
return res;
}

const makeAdjacencyList = (graphData) => {
    const adjacencyList = {};
    graphData.forEach(item => {
        adjacencyList[item.city] = item.flights;
    });
    return adjacencyList;
}

let graphData = [
    { city: 'NY', flights: ['LA', 'CHI', 'MIA'] },
    { city: 'LA', flights: ['NY', 'SF', 'SEA'] },
    { city: 'CHI', flights: ['NY', 'DEN', 'DAL'] },
    { city: 'MIA', flights: ['NY', 'DAL', 'ATL'] },
    { city: 'SF', flights: ['LA', 'SEA'] },
    { city: 'SEA', flights: ['LA', 'SF'] },
    { city: 'DEN', flights: ['CHI', 'DAL'] },
    { city: 'DAL', flights: ['CHI', 'MIA', 'DEN'] },
    { city: 'ATL', flights: ['MIA'] }
];
breadthFirstTraversal('SF', graphData);

export { breadthFirstTraversal };


