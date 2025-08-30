function longestConsecutive(nums: number[]): number {
    let map = new Map<number, boolean>();

    for (let i = 0; i < nums.length; i++){
        map.set(nums[i], true)
    }

    let maxLength = 0;

    for (const num of map.keys()){
        if (!map.has(num - 1)){
            let currentNum = num
            let currentLength = 1

            while (map.has(currentNum + 1)){
                currentNum++;
                currentLength++;
            }

            if (currentLength > maxLength){
                maxLength = currentLength;
            }
        } 
    }

    return maxLength;
};