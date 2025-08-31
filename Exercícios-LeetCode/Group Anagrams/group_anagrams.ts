function groupAnagrams(strs: string[]): string[][] {
    let map = new Map<string, string[]>();

    for (let i = 0; i < strs.length; i++){
        let stringOrdered = strs[i].split("").sort().join("")
        if (!map.has(stringOrdered)){
            map.set(stringOrdered, [strs[i]])
        } else {
            map.set(stringOrdered, [...map.get(stringOrdered), strs[i]])
        }
    }

    return Array.from<string[]>(map.values());
};