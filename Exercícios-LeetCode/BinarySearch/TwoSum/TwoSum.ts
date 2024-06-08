//Time complexity O (n log n)

function twoSum(nums: number[], target: number): number[] {

    let indexedNums = nums.map((num, index) =>  ({ value: num, index: index}))
    indexedNums.sort((a, b) => a.value - b.value)
    for (let i = 0; i < nums.length; i++){
        let term: number = target - indexedNums[i].value
        let termPosition: number = binarySearch(indexedNums, term, i + 1, indexedNums.length - 1)
        if (termPosition !== -1){
            return [indexedNums[i].index, indexedNums[termPosition].index];
        }
    }
};

function binarySearch(nums: { value: number, index: number }[], term: number, left: number, right: number): number {
    let middle: number = left + Math.floor((right - left) / 2)
    if (right < left)
        return -1
    else if (term === nums[middle].value)
        return middle
    else if (term < nums[middle].value)
        return binarySearch(nums, term, left, middle - 1)
    else if (term > nums[middle].value)
        return binarySearch(nums, term, middle + 1, right)
};