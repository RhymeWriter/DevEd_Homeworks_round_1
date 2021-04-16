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

function getMaxElement(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

function getIndexMinElement(arr) {
    var minIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[minIndex] > arr[i]) {
            minIndex = i;
        }
    }
    return minIndex;
}

function getIndexMaxElement(arr) {
    var maxIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[maxIndex] < arr[i]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

function getSumOddIndex(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

function reverseArray(arr) {
    var NewArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        NewArr.push(arr[i]);
    }
    return NewArr;
}

function getSumOddElements(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}

function changePlaceElements(arr) {
    var temp = arr.splice(0, arr.length / 2);
    var arr1 = arr.concat(temp);
    return arr1;
}

function sortArrByBuble(arr) {
    var temp;
    for (var k = 0; k < arr.length; k++) {
        var change = 0;
        for (var i = 0; i < arr.length - 1 - k; i++) {
            if (arr[i] > arr[i + 1]) {
                change++;
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        if (!change) {
            break;
        }
    }

    return arr;
}

function sortArrBySelect(arr) {
    var temp;
    for (var i = 0; i < arr.length; i++) {
        var minEl = i;
        var change = 0;
        for (var k = i + 1; k < arr.length; k++) {
            if (arr[k] < arr[minEl]) {
                minEl = k;
                change++;
            }
        }
        if (minEl !== i) {
            temp = arr[i];
            arr[i] = arr[minEl];
            arr[minEl] = temp;
        }
        if (!change) {
            break;
        }
    }
    return arr;
}

function sortArrByInsert(arr) {
    for (var i = 1; i < arr.length; i++) {
        var insertEl = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > insertEl) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = insertEl;
    }
    return arr;
}
