const INIT_COLOR = 'turquoise';
const PIVOT_VALUE_COLOR = 'red';
const COMPARING_COLOR = '#8000ff';
const SWAPING_COLOR = 'green';
const FINAL_SORTED_COLOR = '#7dff84';
const ANIMATION_SPEED_MS = 10;
const animations = [];

export function doQuickSort(init_array) {
    console.log('array:', init_array);
    const array = init_array.slice();
    const start = 0;
    const end = array.length-1;
    quickSort(array, start, end);
    console.log('sorted:', array);
    return animations;
  }

function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let index = partition(arr, start, end);
    // await Promise.all([
    //     quickSort(arr, start, index-1), 
    //     quickSort(arr, index+1, end)
    // ]);
    quickSort(arr, start, index-1);
    quickSort(arr, index+1, end)

}

function partition(arr, start , end) {
    let pivotIndex = start;
    let pivotValue = arr[end];
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, end);
    return pivotIndex;
}


function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    animations.push([1, a, b]);
    animations.push([-1, a, b]);
    // console.log(arr);
}

