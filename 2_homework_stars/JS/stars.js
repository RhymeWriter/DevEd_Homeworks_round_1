function star1() {
    var star = '';
    for (var i = 1; i < 8; i++) {
        for (var j = 1; j < 8; j++) {
            star += '* ';
        }
        star += '\n';
    }
    return star;
}

console.log(star1());


function star2() {
    var star = '';
    for (var i = 1; i < 8; i++) {
        for (var j = 1; j < 8; j++) {
            if (i === 1 || i === 7 || j === 1 || j === 7) {
                star += '* ';
            } else {
                star += '  ';
            }
        }
        star += "\n";
    }
    return star;
}

console.log(star2());

function star3() {
    var star = '';
    for (var i = 1; i < 8; i++) {
        for (var j = 7; j >= 1; j--) {
            if (i === 1 || i === j || j === 7) {
                star += '* ';
            } else {
                star += '  ';
            }
        }
        star += "\n";
    }
    return star;
}

console.log(star3());


function star4() {
    var star = '';
    for (var i = 1; i < 8; i++) {
        for (var j = 1; j < 8; j++) {
            if (i === 7 || i === j || j === 1) {
                star += '* ';
            } else {
                star += '  ';
            }
        }
        star += "\n";
    }
    return star;
}

console.log(star4());


function star5() {
    var star = '';
    for (var i = 7; i >= 1; i--) {
        for (var j = 1; j < 8; j++) {
            if (i === 1 || i === j || j === 7) {
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



function star6() {
    var star = '';
    for (var i = 7; i >= 1; i--) {
        for (var j = 7; j >= 1; j--) {
            if (i === 7 || i === j || j === 1) {
                star += '* ';
            } else {
                star += '  ';
            }
        }
        star += "\n";
    }
    return star;
}

console.log(star6());