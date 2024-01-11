function findNeighbors(node, matrix) {
  let row = node[0];
  let col = node[1];
  let result = [];
  // Up
  if (row - 1 >= 0) {
    let up = [row - 1, col];
    result.push(up);
  }
  // Down
  if (row + 1 <= matrix.length - 1) {
    let down = [row + 1, col];
    result.push(down);
  }
  // Left
  if (col - 1 >= 0) {
    let left = [row, col - 1];
    result.push(left);
  }
  // Right
  if (col + 1 <= matrix[0].length - 1) {
    let right = [row, col + 1];
    result.push(right);
  }

  // Your code here
  return result;
}

function bfsPath(matrix, startNode, endValue) {
  // Your code here
  let queue = [startNode];
  let path = [];
  let visited = new Set();
  while (queue.length != 0) {
    let currentNode = queue.shift();
    if (!visited.has(currentNode.toString())) {
      path.push(currentNode);
      visited.add(currentNode.toString());
    }

    let row = currentNode[0];
    let col = currentNode[1];
    let val = matrix[row][col];
    if (val === endValue) {
      return path;
    }

    let neighbors = findNeighbors(currentNode, matrix);
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor.toString())) {
        queue.push(neighbor);
      }
    }
  }
  return false;
}

// ***** UNCOMMENT FOR LOCAL TESTING *****

const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// // EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// // internal node (left, right, down, up)
// // [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]

// EXAMPLE TESTS #2. Tests for bfsPath function

console.log(bfsPath(matrix1, [0, 0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

console.log(bfsPath(matrix1, [2, 2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

console.log(bfsPath(matrix1, [1, 2], 8)); // can handle various start nodes
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

console.log(bfsPath(matrix1, [0, 0], 17)); // can return false if end value
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
