interface Graph<T> {
    [key: string]: Array<T>
};

let graph: Graph<string> = {};

graph["voce"] = ["alice", "claire", "bob"];
graph["bob"] = ["peggy", "anuj"]
graph["alice"] = ["peggy"]
graph["claire"] = ["jonny", "thom"]
graph["anuj"] = []
graph["peggy"] = []
graph["jonny"] = []
graph["thom"] = []


function bfs(name: string){
    let deque = graph[name];
    let checked: Array<string> = []
    while (deque.length > 0) {
        let pessoa = deque.shift()!;
        if (!checked.includes(pessoa)){
            if (personIsSeller(pessoa)){
                return true;
            } else {
                deque = [...deque, ...graph[pessoa]]
                checked.push(pessoa);
            }
        }
    }

    return false;
}

function personIsSeller(name: string){
    return name[name.length - 1] === "m";
}

console.log(bfs("voce"))