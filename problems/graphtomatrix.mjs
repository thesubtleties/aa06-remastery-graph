function graphToMatrix(graph) {
    const vertices = graph.map(item => item.city);
    const n = vertices.length;
    const matrix = Array.from({length: n}, () => Array(n).fill(0));
    const vertexIndex = {};
    vertices.forEach((vertex, index) => {
        vertexIndex[vertex] = index;
    });
    graph.forEach(item => {
        const rowIndex = vertexIndex[item.city];
        item.flights.forEach(neighbor => {
            const colIndex = vertexIndex[neighbor];
            matrix[rowIndex][colIndex] = 1;
        })
    })

    return { matrix, vertexIndex }
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

graphToMatrix(graphData);