export function doInsertionSort(init_array) {
    const animations = [];
    const array = init_array.slice();
    console.log(array);
    for (let i=1; i<array.length; i++) {
        let key = array[i];
        animations.push([1, i]); //red
        let j = i-1;
        while (j>=0 && key<array[j]) {
            animations.push([2, j+1]); //purple
            array[j + 1] = array[j];
            animations.push([4, j+1, array[j]]);
            animations.push([3, j+1]);
            animations.push([0, j+1]);
            j-=1;
        }
        array[j+1]=key;
        animations.push([4, j+1, key]);
    }
    console.log('sorted:', array);
    return animations
}