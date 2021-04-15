console.log('Циклы');

console.log('1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99');

var SumEvNum = 0; // сумма чётный чисел
var NumEvNum = 0; // количество чётных чисел

for (var i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        SumEvNum += i;
        NumEvNum += 1;
    }
}
console.log('сумма чётных чисел = ' + SumEvNum);
console.log('количество чётных чисел = ' + NumEvNum);

console.log('2. Проверить простое ли число?');

function checkSimple(number) {
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            return 'число не простое';
        }

    } return 'число простое';
}

console.log(checkSimple(13));

console.log('3. Найти корень натурального числа с точностью до целого');
// (рассмотреть вариант последовательного подбора и метод бинарного поиска)

function sqrt(num) {
    for (var i = 1; i < num; i++) {
        if (i * i === num) {
            return i;
        }
        if (i * i > num) {
            return i - 1;
        }
    }

}

console.log(sqrt(37));

console.log('4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;');

function fact(Num) {
    var mult = 1;
    for (var i = 1; i <= Num; i++) {
        mult = i * mult;
    } return mult;
}
console.log(fact(4));

console.log('5. Посчитать сумму цифр заданного числа');

function digitSum(num) {
    var sum = 0, tmp;
    while (num > 0) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        sum += tmp;
    }
    return sum;
}
console.log(digitSum(123));

console.log('6. Вывести число, которое является зеркальным отображением последовательности цифр заданного числа');

function mirrorNumber(num) {
    var number = 0;
    while (num > 0) {
        number = number * 10 + (num % 10);
        num = (num / 10) - ((num % 10) / 10);
    }
    return number;
}

console.log(mirrorNumber(7654321));




