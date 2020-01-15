/**
 * Implementation of Dijkstra's algorithm for a grid. Returns either a function
 * that runs the next iteration of the search, false if no path can be found, or an
 * association array of each searched coordinate and the closest coordinate to it.
 *
 * @param {*} grid The grid to search
 * @param {*} start The starting coordinate
 * @param {*} end The ending coordinate
 * @returns A function that will run one iteration of the algorithm.
 */
function dijkstra(grid, start, end) {
  const width = grid.length
  const height = grid[0].length
  let queue = [start] // queue the starting position
  grid[start[0]][start[1]].visited = true // starting node is visited
  // vector components for neighboring grids
  let dr = [-1, +1, 0, 0] // left right up down
  let dc = [0, 0, -1, +1] // left right up down

  // association list of coordinates and their nearest neighbor
  let prev = Array.from({length: height}, () => Array.from({length: width}, () => null))

  function step() {
    if (queue.length === 0) return false // no more nodes to search

    // priority queue of neighbors to search
    let neighbors = []
    while(queue.length) {
      const [r, c] = queue.shift()
      // calculate the 4 possible neighbors using vector components
      for (let i = 0; i < 4; i++) {
        const rr = dr[i] + r
        const cc = dc[i] + c
        // skip out of range coordinates
        if (rr < 0 || rr === height || cc < 0 || cc === width) continue
        const tile = grid[rr][cc]
        if (tile.type !== 'wall' && !tile.visited) {
          tile.visited = true
          neighbors.unshift([rr, cc])
          prev[rr * width + cc] = [r, c]
          if (rr === end[0] && cc === end[1]) return prev
        }
      }
    }
    queue = neighbors // next iteration is to search all the neighbors
    return step
  }

  return step
}

/**
 * Calculate the shortest path from an association list of nearest neighbors
 *
 * @param {*} list Association list of nearest neigbors.
 */
function buildPath(list, width, end) {
  let path = []
  let prev = end
  while (prev !== undefined) {
    let [r, c] = prev
    prev = list[r * width + c]
    path.push([r, c])
  }

  return path
}

export {
  dijkstra,
  buildPath
}