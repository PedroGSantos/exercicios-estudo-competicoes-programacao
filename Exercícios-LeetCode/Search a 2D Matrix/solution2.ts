function searchMatrix(matrix: number[][], target: number): boolean {
    let c = matrix[0].length;
    let leftL = 0
    let rightL = matrix.length - 1

    while (leftL <= rightL){ 
        const midL = Math.floor((leftL + rightL) / 2)

        if (matrix[midL][0] > target){
            rightL = midL - 1
        } else if (matrix[midL][c - 1] < target){
            leftL = midL + 1
        } else {
            break
        }
    }

    if (leftL > rightL) return false

    let row = Math.floor((rightL + leftL) / 2)
    let left = 0
    let right = matrix[row].length - 1

    while (left <= right){
        const mid = Math.floor((left + right) / 2)

        if (target === matrix[row][mid]){
            return true
        } else if (target < matrix[row][mid]){
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return false;
};