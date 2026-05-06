function findMin(nums: number[]): number {
    let left = 0
    let right = nums.length - 1

    while (left <= right){
        const mid = Math.floor((right + left) / 2)

        if (nums[mid] < nums[mid - 1]){
            return nums[mid]
        }
        
        if (nums[left] > nums[mid]){
            if (nums[mid - 1] > nums[mid]){
                return nums[mid - 1]
            } else {
                right = mid - 1
            }
        } else {
            if (nums[mid + 1] < nums[mid]){
                return nums[mid + 1]
            } else {
                left = mid + 1
            }
        }
    }

    return nums[0]
};