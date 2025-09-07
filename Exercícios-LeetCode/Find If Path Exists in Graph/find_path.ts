function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    let map = buildAdjacencyList(n,edges);
    return bfs(map, source, destination);
};

function bfs(edges: number[][], source: number, destination: number): boolean{
    let checked = new Set<number>();
    let queue: number[] = [source];
    let head = 0;

    while (head < queue.length){
        let atual = queue[head++];
        if (!checked.has(atual)){
            if (atual === destination){
                return true
            } else {
                checked.add(atual); 
                queue.push(...edges[atual])
            }
        }
    }

    return false;
}

function buildAdjacencyList(n: number, edges: number[][]): number[][] {
    const adjList: number[][] = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        adjList[u].push(v);
        adjList[v].push(u);
    }

    return adjList;
}