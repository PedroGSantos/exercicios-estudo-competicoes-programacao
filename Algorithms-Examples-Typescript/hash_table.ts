let map = new Map<string, number>();

map.set("apple", 5)
map.set("banana", 2)
map.set("orange", 1)

console.log(map.get("banana"))
console.log(map.get("orange"))

console.log(map.has("apple"))

console.log(map.delete("banana"))
console.log(map.size)

for (const [key, value] of map){
    console.log(`${key}: ${value}`)
}

console.log(map.keys())
console.log(map.values())