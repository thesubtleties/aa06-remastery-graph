function findNeighbors(node, matrix) {
    // Only consider N, S, E, W nodes
    const [row, col] = node;
    const res = [];

    // North
    if ([row - 1] >= 0 && matrix[row - 1][col] < -5) {
        res.push([row - 1, col]);
    }

    // South
    if ([row + 1] < matrix.length && matrix[row+1][col] < -5) {
        res.push([row + 1, col]);
    }
    // East
    if ((col - 1) >= 0 && matrix[row][col-1] < -5) {
        res.push([row, col - 1]);
    }
    // West
    if (matrix[row][col + 1] && matrix[row][col+1] < -5) {
        res.push([row, col + 1]);
    }

    // Your code here 
    return res;
}

function trenchTraversal(node, matrix, visited) {
    // Don't bother traversing if it is to shallow

    // Traverse the potential trench to count it's length
    // Your code here 
    const [row, col] = node;
    if (matrix[row][col] >= -5) return false;
    const paths = [[node]];
    while (paths.length > 0) {
        const currentPath = paths.shift();
        const currentNode = currentPath[currentPath.length - 1];
        visited.add(`${currentNode}`);
        const neighbors = findNeighbors(currentNode, matrix);
        if (neighbors.length > 2) {
        return false;
        }
        neighbors.forEach(neighbor => {
            if (!visited.has(`${neighbor}`)) {
                const newPath = currentPath.slice(0);
                newPath.push(neighbor);
                paths.push(newPath);
            }
    })
    }
    if (visited.size > 2) {
        return true;
    }
    return false;
        }



function identifyTrench(trenchMatrix) {
    // Start at 0,0 and attempt to traverse any unvisited nodes
    // Your code here 
    
    for (let i = 0; i < trenchMatrix.length; i++) {
        for (let j = 0; j < trenchMatrix[0].length; j++) {
            const visited = new Set();
            const current = [i, j];
            if (trenchTraversal(current, trenchMatrix, visited)) {
                return true;
            }
        }
    }
    return false;
}


// Uncomment for local testing


// const sonar_data = [
//     [-8, -5, -9],
//     [-6, -5, -8],
//     [-7, -7, -8],
//   ];
//   const SENeighbors = findNeighbors([2, 2], sonar_data);


// Example 0
// const sonar_0 = [
//     [-5, -5, -5],
//     [-6, -5, -8],
//     [-5, -7, -5]
// ]

// console.log(findNeighbors([1,1], sonar_0)) // => Expect [[2, 1], [1, 0], [1, 2]];

// Example 1
// const sonar_1 = [
//           [-5,-5,-5,-5,-5],
//           [-5,-8,-8,-9,-7],
//           [-5,-5,-5,-5,-8],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_1)) // <- Expect 'true'

// let visited2 = new Set();

// // findNeighbors([1, 3], sonar_2)
// let visited1 = new Set();
// const validTrench = trenchTraversal([2, 4], sonar_1, visited1);

// // Example 2
// const sonar_2 = [
//           [-5,-5,-5,-7,-5],
//           [-5,-8,-8,-9,-5],
//           [-5,-5,-5,-7,-5],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_2)) // <- Expect 'false'

// // Example 3
// const sonar_3 = [
//           [-5,-5,-5,-5,-5],
//           [-5,-5,-5,-5,-5],
//           [-5,-9,-9,-5,-5],
//           [-5,-5,-5,-5,-5]
// ]
// console.log(identifyTrench(sonar_3)) // <- Expect 'false'


// const sonar_1 = [
//     [-5, -5, -5, -5, -5],
//     [-5, -8, -8, -9, -7],
//     [-5, -5, -5, -5, -8],
//     [-5, -5, -5, -5, -5],
//   ];
//   let visited1 = new Set();
//   const validTrench = trenchTraversal([1, 3], sonar_1, visited1);

// const sonar_2 = [
//     [-5, -5, -5, -6, -5],
//     [-5, -7, -8, -9, -5],
//     [-5, -5, -5, -8, -5],
//     [-5, -5, -5, -5, -5],
//   ];

// let visited2 = new Set();
// const tTrench = trenchTraversal([1, 1], sonar_2, visited2);













/*************DO NOT MODIFY UNDER THIS LINE ***************/

export { findNeighbors, identifyTrench, trenchTraversal}