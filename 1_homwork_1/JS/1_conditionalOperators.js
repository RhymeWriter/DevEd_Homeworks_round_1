console.log('Условные операторы');

console.log('1. Если а - чётное, посчитать а * b, иначе a + b');

function sumOrMult(a, b) {
    if (a % 2 === 0) {
        return a * b;
    }
    return a + b;
}

console.log(sumOrMult(13, 2));

console.log('2. Определить какой четверти пренадлежит точка с координатами(x, y)');

function whichQuar(x, y) {
    if (x > 0 && y > 0) {
        console.log("I-я четверть");
    } else if (x < 0 && y > 0) {
        console.log("II-я четверть");
    } else if (x < 0 && y < 0) {
        console.log("III-я четверть");
    } else if (x > 0 && y < 0) {
        console.log("IV-я четверть");
    } else {
        console.log("точка на оси координат");
    }
}

whichQuar(0, -8);

console.log('3. Найти суммы только положительных из трех чисел');

function getSumOfPositiveNumbers(a, b, c) {
    var result = 0;
    if (a > 0) {
        result += a;
    }
    if (b > 0) {
        result += b;
    }
    if (c > 0) {
        result += c;
    }
    return result;
}
console.log(getSumOfPositiveNumbers(-1, 6, 2));

console.log('4. Посчитать выражение(макс(а * б * с, а + б + с)) + 3');

function calc(a, b, c, d) {
    if (a * b * c > a + b + c) {
        return a * b * c + d;
    }
    return a + b + c + d;
}
console.log(calc(1, 5, 3, 3));

console.log('5. Написать программу определения оценки студента');
// по его рейтингу на основе следующих правил:
//     Рейтинг Оценка
// 0 - 19        F
// 20 - 39       E
// 40 - 59       D
// 60 - 74       C
// 75 - 89       B
// 90 - 100      A

function studRat(rating) {
    if (rating >= 0 && rating <= 19) {
        console.log('Оценка: F');
    } else if (rating >= 20 && rating <= 39) {
        console.log('Оценка: E');
    } else if (rating >= 40 && rating <= 59) {
        console.log('Оценка: D');
    } else if (rating >= 60 && rating <= 74) {
        console.log('Оценка: C');
    } else if (rating >= 75 && rating <= 89) {
        console.log('Оценка: B');
    } else if (rating >= 90 && rating <= 100) {
        console.log('Оценка: A');
    } else {
        console.log('неверный ввод');
    }
}

studRat(56);


