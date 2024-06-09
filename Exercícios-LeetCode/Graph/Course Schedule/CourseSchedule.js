var findOrder = function (numCourses, prerequisites) {
	let graph = createGraph(numCourses, prerequisites);

	let result = bfs(graph, 0);

	if (result[0] === 0) {
		let courses = Array.from(
			{ length: numCourses },
			(data, index) => index
		);
		return courses;
	} else {
		return result;
	}
};

function createGraph(numCourses, prerequisites) {
	let graph = new Array(numCourses).fill(null).map(() => []);
	for (let i = 0; i < prerequisites.length; i++) {
		graph[prerequisites[i][1]] = [
			...graph[prerequisites[i][1]],
			prerequisites[i][0],
		];
	}

	return graph;
}

function bfs(graph, startNode) {
	let visited = new Array(graph.length).fill(false);
	let queue = [];
	let result = [];

	queue.push(startNode);
	visited[startNode] = true;

	while (queue.length > 0) {
		let currentNode = queue.shift();
		result.push(currentNode);

		let neighbors = graph[currentNode];

		for (let i = 0; i < neighbors.length; i++) {
			if (!visited[neighbors[i]]) {
				queue.push(neighbors[i]);
				visited[neighbors[i]] = true;
			}
		}
	}

	return result;
}
