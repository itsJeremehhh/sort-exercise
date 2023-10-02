function insertionSort(arr) {
    //while this is true..is it while? not a while loop
    for (let i = 0; i < arr.length; i++) {//execute this...
        let currentValue = arr[i];

        for (let j = i - 1; j > -1 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = currentValue;
    }

    return arr;
}

module.exports = insertionSort;