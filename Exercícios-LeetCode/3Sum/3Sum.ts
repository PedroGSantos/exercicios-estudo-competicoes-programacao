function threeSum(nums: number[]): number[][] {
    let resp: number[][] = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++){
        if (i > 0 && nums[i] === nums[i - 1]){
            continue
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right){
            let threeSum = nums[i] + nums[left] + nums[right];
            if (threeSum > 0){
                right--;
            } else if (threeSum < 0){
                left++;
            } else {
                resp.push([nums[i], nums[left], nums[right]]) 
                left++;
                while (left < right && nums[left] === nums[left - 1]){
                    left++;
                }
            }
        }
    }
    
    return resp;
};