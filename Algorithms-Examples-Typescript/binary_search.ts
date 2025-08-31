function binarySearch(arr: number[], target: number): boolean{
    let left = 0;
    let right = arr.length;
    while (left < right){
        let middle = Math.floor((left + right) / 2) 
        if (arr[middle] === target)
            return true;
        else if (target < arr[middle])
            right = middle - 1
        else 
            left = middle + 1
    }

    return false;
}

console.log(binarySearch([1, 6, 8, 10, 12], 10))

