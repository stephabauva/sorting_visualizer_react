export function doMergeSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx; //the idx in the real array that will be overwritten
    let i = startIdx; //idxItem1 
    let j = middleIdx + 1; //idxItem2, right after the middle of the array
    //while neither of the index of the left AND right array have reached the en dof their list,
    //keep comparing a value from the start-to-mid list to a value from the mid+1-to-end list
    while (i <= middleIdx && j <= endIdx) { 
      animations.push([i, j]); //color bars in red
      animations.push([i, j]); //reverts bars in blue
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        //the item at idx i of the start-to-mid list is <or= to the item at idx j of the mid+1-to-end list,
        //therefore, i moves up (i++)
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    //in the case where we've reached the end of the mid+1-to-end list, 
    //just keep iterating through the start-to-mid list
    while (i <= middleIdx) {
      animations.push([i, i]);
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
}