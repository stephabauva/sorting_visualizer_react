
/*merge sort*/
export function doMergeSort(array) {
    if (array.length <= 1) return array;
    return divide(array);
}

function divide(array) {
    var midPoint = Math.ceil(array.length / 2); //rounds to next integer
    var leftArray = array.slice(0, midPoint); //from start to middle item (mid item not included)
    var rightArray = array.slice(midPoint); //starts at mid item (includes mid item)
    if (midPoint > 1) {
        leftArray = divide(leftArray);
        rightArray = divide(rightArray);
    }
    return merge(leftArray, rightArray);
}
function merge(leftArray, rightArray) {
    var leftIndex = 0; // to keep track if we visited all item of the array
    var rightIndex = 0; // same here
    var merged = [];
    while (leftIndex < leftArray.length || rightIndex < rightArray.length) { // ||=OR
        var leftArrayItem = leftArray[leftIndex];
        var rightArrayItem = rightArray[rightIndex];
        if (leftArrayItem !== undefined) { //if there is an item an the left
            if (rightArrayItem === undefined) { //but nothing on the right
                merged.push(leftArrayItem); //then just push the left item to the ordered list
                leftIndex++;
            }
            else {
                if (leftArrayItem <= rightArrayItem) { //if left exists and is <= to right, just push the left
                    merged.push(leftArrayItem);
                    leftIndex++;
                }
                else {
                    merged.push(rightArrayItem); //otherwise, left is > to right so just push the right item
                    rightIndex++;
                }
            }
        }
        else {
            if (rightArrayItem !== undefined) {
                merged.push(rightArrayItem);
                rightIndex++;
            }
        }
    }
    return merged;
}