export function doBubbleSort(array) {
    const n = array.length;
    const animations = [];
    compare(array, n, animations);
    console.log('sorted:', array);
    return animations;

    function compare(array, n, animations) {
        for (let i=0; i<=array.length; i++) {
            let swapped = false;
            for (let j=0; j<= n-i-1; j++) {
                animations.push([1, j, j+1]); //select
                if (array[j] > array[j+1]) {
                    animations.push([2, j, j+1]); //swap
                    swap(array, j, j+1)
                    swapped = true;
                    animations.push([0, j, j+1]); //back to normal
                }
                animations.push([0, j, j+1]); //back to normal
            }
            if (swapped == false) {
                break
            }
        };
    }
}

function swap(array, a, b) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}