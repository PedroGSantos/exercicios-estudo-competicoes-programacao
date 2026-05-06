function searchMatrix(matrix: number[][], target: number): boolean {
    const c = matrix[0].length
    const l = matrix.length
    for (let i = 0; i < l; i ++){
        if (target >= matrix[i][0] && target <= matrix[i][c - 1]){
            let left = 0
            let right = c - 1

            while (left <= right){
                const mid = Math.floor((left + right) / 2)

                if (matrix[i][mid] === target){
                    return true
                } else if (matrix[i][mid] > target){
                    right = mid - 1
                } else {
                    left = mid + 1
                }
            }
        }
    }

    return false
};