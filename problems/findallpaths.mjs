function findAllPaths(start, end, graphData) {
    const queue = [[start]];
    const res = [];
    const adjacencyList = getAdjacencyList(graphData);
    while (queue.length > 0) {
        const currentPath = queue.shift();
        const currentNode = currentPath[currentPath.length - 1];
        const neighbors = adjacencyList[currentNode];
        
        neighbors.forEach(neighbor => {
            let newPath = currentPath.slice(0);
            if (neighbor === end) {
                newPath.push(neighbor);
                res.push(newPath);
            } else if (!newPath.includes(neighbor)) {
                newPath.push(neighbor);
                queue.push(newPath);
            }
        });
    }
    return res;
}


const getAdjacencyList = (graphData) => {
    const adjacencyList = {};
    graphData.forEach(item => {
        adjacencyList[item.city] = item.flights;
    });
    return adjacencyList;
}

const graphData = [
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
findAllPaths('SF', 'DAL', graphData)



// we will start traversing at start
// put start in a queue as a PATH (so inside another array)
// while the queue is not empty, we will take the path out of the queue... we will get current node by getting last item in the path
// we find neighbors of current node. IF neighbor is not already IN current path, we add to current path and put back in queue
// if neighbor IS already in path, we dump that path as it has a cycle.
// if we HIT our END item, we add it to results (dump from the queue)
// when queue is empty, we return array of results

export { findAllPaths }