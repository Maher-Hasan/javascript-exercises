const fibonacci = function (n) {
    if (n < 0) {
        return "OOPS";
    }
    else if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else if (n == 2) {
        return 1;
    }

    let a = 1;
    let b = 1;
    let result = 0;
    for (let i = 3; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    return result;
}

// Do not edit below this line
module.exports = fibonacci;
