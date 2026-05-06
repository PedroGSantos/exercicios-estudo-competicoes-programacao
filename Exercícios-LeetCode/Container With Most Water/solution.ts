function maxArea(height: number[]): number {
    let left = 0
    let right = height.length - 1
    let maxArea = 0

    while (left < right){
        let minHeight = Math.min(height[left], height[right])
        const area = minHeight * (right - left)

        if (area > maxArea){
            maxArea = area
        }

        if (height[left] < height[right]){
            left++
        } else {
            right--
        }
    }

    return maxArea
};