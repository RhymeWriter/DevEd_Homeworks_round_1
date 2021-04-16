console.log('Одномерные массивы');

console.log('1. Найти минимальный элемент массива');

function getMinEl(arr) {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(getMinEl([5, 7, 2, 4]));

console.log('2. Найти максимальный элемент массива');

function getMaxEl(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getMaxEl([5, 7, 2, 4]));

console.log('3. Найти индекс минимального элемента массива');

function getIndexMinEl(arr) {
    var minIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[minIndex] > arr[i]) {
            minIndex = i;
        }
    }
    return minIndex;
}

console.log(getIndexMinEl([5, 7, 2, 4]));

console.log('4. Найти индекс максимального элемента массива');

function getIndexMaxEl(arr) {
    var maxIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[maxIndex] < arr[i]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

console.log(getIndexMaxEl([5, 7, 2, 4]));

console.log('5. Посчитать сумму элементов массива с нечетными индексами');

function getSumOddIndex(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(getSumOddIndex([5, 7, 2, 4]));