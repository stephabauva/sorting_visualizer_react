export function doQuickSort(array) {;
    const animations = [];
    const start = 0;
    const end = array.length-1;
    animations.push([-1, end]);
    quickSort(array, start, end, animations);
    return animations;
  }

function quickSort(arr, start, end, animations) {
    if (start >= end) {
        return;
    }
    let index = partition(arr, start, end, animations);
    quickSort(arr, start, index-1, animations);
    quickSort(arr, index+1, end, animations)

}

function partition(arr, start , end, animations) {
    let pivotIndex = start;
    let pivotValue = arr[end];
    animations.push([-1, end]);
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, pivotIndex, animations);
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, end, animations);
    return pivotIndex;
}


function swap(arr, a, b, animations) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    animations.push([-2, a, b]);
    animations.push([-3, a, b]);
    
}

