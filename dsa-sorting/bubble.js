function bubbleSort(arr) {
    //the swap logic in which 1, 2 becomes 2,1 needs an array and index from the array
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
//why would we only have i = arr.length? would index work too?
    for (let i = arr.length; i > 0; i--) { //why start --1 instead of ++1
        for (let j = 0; j< i-1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }

    return arr;

}
//does i ever get comparded to j?


module.exports = bubbleSort;