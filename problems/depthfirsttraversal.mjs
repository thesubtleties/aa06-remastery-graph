const depthFirstTraversal = (start, graph) => {
    const adjacencyList = makeAdjacencyList(graph);
    const stack = [];
    const visited = new Set();
    const res = [];
    stack.push(start);

    while (stack.length > 0) {
        const current = stack.pop();
        if (!visited.has(current)) {
            visited.add(current);
            res.push(current);
        }
      
        const neighbors = adjacencyList[current];
        for (let i = neighbors.length - 1; i >= 0; i--) {
            if (!visited.has(neighbors[i])) {
                stack.push(neighbors[i]);
            }    
        }
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
depthFirstTraversal('SF', graphData);

export { depthFirstTraversal };

// initiate results array, visited Set, and stack
// create adjacency list from data (w/ helper function)
// find first item in adjacency list. add first item to stack.
// while stack is not empty => we will pop item from queue, add it to visited, add it to results.
// find neighbors of item
// if not visited, add each neighbor to the stack.
// return results array