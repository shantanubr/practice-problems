/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let l = 0;
    let r = rows - 1;

    while (l <= r) {
        let mid = Math.floor((l+r)/2);
        if (target < matrix[mid][0]) {
            r = mid - 1;
        } else if (target > matrix[mid][cols-1]) {
            l = mid + 1;
        } else {
            break;
        }
    }

    if (!(l <= r)) {
        return false;
    }

    let resRow = Math.floor((l + r)/2);

    let lf = 0;
    let rf = cols - 1;

    while (lf <= rf) {
        let mid = Math.floor((lf+rf)/2);
        if (target < matrix[resRow][mid]) {
            rf = mid - 1; 
        } else if (target > matrix[resRow][mid]) {
            lf = mid + 1;
        } else {
            return true;
        }
    }

    return false;
};