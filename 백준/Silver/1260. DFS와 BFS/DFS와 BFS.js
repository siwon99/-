const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, V] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(' ').map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

// DFS 구현
function dfs(vertex, visited, result) {
  visited[vertex] = true;
  result.push(vertex);

  for (const neighbor of graph[vertex]) {
      if (!visited[neighbor]) {
          dfs(neighbor, visited, result); 
      }
  }
}

// BFS 구현
function bfs(start) {
  const visited = Array(N + 1).fill(false);
  const queue = [start];
  const result = [];

  visited[start] = true;  

  while (queue.length > 0) {
      const vertex = queue.shift(); 
      result.push(vertex);           

      for (const neighbor of graph[vertex]) {
          if (!visited[neighbor]) {
              visited[neighbor] = true; 
              queue.push(neighbor);     
          }
      }
  }

  return result;
}

const visited = Array(N + 1).fill(false);
const dfsResult = [];

dfs(V, visited, dfsResult);
const bfsResult = bfs(V);

console.log(dfsResult.join(' '));
console.log(bfsResult.join(' '));