// var x = '*';
// function star3() {
//     for (i = 0; i < 7; i++); {
//         if (i > 7)
//     }
// } return x;

// console.log(star3());


// function leftUpTriangle() {
//     var symbol = ""
//     for (var i = 0, x = 6; i < 7; i++, x--) {
//         for (var j = 0; j < 7; j++) {
//             if (i == 0) {
//                 symbol += "*  ";
//             } else if (j == 0 || j == x) {
//                 symbol += "*  "
//             } else {
//                 symbol += "   "
//             }
//         }
//         symbol += "\n";
//     }
//     return symbol;
// }
// console.log(leftUpTriangle());


// function star1() {
//     var star = '';
//     for (var i = 0; i < 7; i++) {
//         for (var j = 0; j < 7; j++) {
//             star += '* ';
//         }
//         star += '\n';
//     }
//     return star;
// }

// console.log(star1());


// function star2() {
//     var star = '';
//     for (var i = 1; i < 8; i++) {
//         for (var j = 1; j < 8; j++) {
//             if (i === 1 || i === 7 || j === 1 || j === 7) {
//                 star += '* ';
//             } else {
//                 star += '  ';
//             }
//         }
//         star += "\n";
//     }
//     return star;
// }

// console.log(star2());

// function star3() {
//     var star = '';
//     for (var i = 1; i < 8; i++) {
//         for (var j = 7; j >= 1; j--) {
//             if (i === 1 || i === j || j === 7) {
//                 star += '* ';
//             } else {
//                 star += '  ';
//             }
//         }
//         star += "\n";
//     }
//     return star;
// }

// console.log(star3());


// function star4() {
//     var star = '';
//     for (var i = 1; i < 8; i++) {
//         for (var j = 1; j < 8; j++) {
//             if (i === 7 || i === j || j === 1) {
//                 star += '* ';
//             } else {
//                 star += '  ';
//             }
//         }
//         star += "\n";
//     }
//     return star;
// }

// console.log(star4());


function star5() {
    var star = '';
    for (var i = 6; i >= 0; i--) {
        for (var j = 6; j >= 0; j--) {
            if (i === 6 || i === j || j === 0) {
                star += '* ';
            } else {
                star += '  ';
            }
        }
        star += "\n";
    }
    return star;
}

console.log(star5());


// function star6() {
//     var star = '';
//     for (var i = 6; i >= 0; i--) {
//         for (var j = 6; j >= 0; j--) {
//             if (i === 6 || i === j || j === 0) {
//                 star += '* ';
//             } else {
//                 star += '  ';
//             }
//         }
//         star += "\n";
//     }
//     return star;
// }

// console.log(star6());


// function star1() {
//     var star = '';
//     for (var i = 0; i < 7; i++) {
//         for (var j = 0; j < 7; j++) {
//             star += '* ';
//         }
//         star += '\n';
//     }
//     return star;
// }
// console.log(star1())

// function star2() {
//     var star = '';
//     for (var i = 0; i < 7; i++) {
//         for (var j = 0; j < 7; j++) {
//             if (i === 0 || i === 6 || j === 0 || j === 6) {
//                 star += '* ';
//             } else {
//                 star += '  ';
//             }
//         }
//         star += '\n';
//     }
//     return star;
// }
// console.log(star2())

// function star3() {
//     var star = '';
//     for (var i = 0; i < 7; i++) {
//         for (var j = 6; j >= 0; j--) {
//             if (j === 6 || i === 0 || i === j) {
//                 star += '* ';
//             } else {
//                 star += '  ';
//             }
//         }
//         star += '\n';
//     }
//     return star;
// }
// console.log(star3())

// function star4() {
//     var star = '';
//     for (var i = 0; i < 7; i++) {
//         for (var j = 0; j < 7; j++) {
//             if (j === 0 || i === 6 || i === j) {
//                 star += '* ';
//             } else {
//                 star += '  ';
//             }
//         }
//         star += '\n';
//     }
//     return star;
// }
// console.log(star4())

// function star5() {
//     var star = '';
//     for (var i = 0; i < 7; i++) {
//         for (var j = 6; j >= 0; j--) {
//             if (j === 0 || i === 6 || i === j) {
//                 star += '* ';
//             } else {
//                 star += '  ';
//             }
//         }
//         star += '\n';
//     }
//     return star;
// }
// console.log(star5())

// function star6() {
//     var star = '';
//     for (var i = 0; i < 7; i++) {
//         for (var j = 0; j < 7; j++) {
//             if (j === 6 || i === 0 || i === j) {
//                 star += '*  ';
//             } else {
//                 star += '   ';
//             }
//         }
//         star += '\n';
//     }
//     return star;
// }
// console.log(star6())

// function star7() {
//     var star = '';
//     for (var i = 0; i < 7; i++) {
//         for (var j = 0; j < 7; j++) {
//             if (i === j || i === 6 - j) {
//                 star += '*  ';
//             } else {
//                 star += '   ';
//             }
//         }
//         star += '\n';
//     }
//     return star
// }
// console.log(star7())

// function star8() {
//     var star = '';
//     for (var i = 0; i < 4; i++) {
//         for (var j = 0; j < 7; j++) {
//             if (i === 0 || i === j || i === 6 - j) {
//                 star += '*  ';
//             } else {
//                 star += '   ';
//             }
//         }
//         star += '\n';
//     }
//     return star + '\n' + '\n' + '\n';
// }
// console.log(star8())

// function star9() {
//     var star = '';
//     for (var i = 0; i < 7; i++) {
//         for (var j = 0; j < 7; j++) {
//             if (i < 3) {
//                 star += '';
//             } else if (i === 6 || i === j || j === 6 - i) {
//                 star += '*  ';
//             }
//             else {
//                 star += '   ';
//             }
//         }
//         star += '\n';
//     }
//     return star;
// }
// console.log(star9())