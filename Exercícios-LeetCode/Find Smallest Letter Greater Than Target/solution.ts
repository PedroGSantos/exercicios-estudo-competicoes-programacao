function nextGreatestLetter(letters: string[], target: string): string {
    let left = 0;
    let right = letters.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (letters[mid] === target && letters[mid] !== letters[mid + 1]){
            if ((mid + 1) === letters.length)
                return letters[0]
            else 
                return letters[mid + 1]
        } else if (target < letters[mid]){
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    if (left === letters.length){
        return letters[0]
    } else {
        return letters[left]
    }
};