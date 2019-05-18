function digitConverter(dig, digIndex) {
    let f, m, l;
    [f, m, l] = 'IVXLCDM'.split('').splice(digIndex * 2 + 0, digIndex * 2 + 3);

    let output = '';

    if (dig <= 3) {
        output += f.repeat(dig);
    } else if (dig === 4) {
        output = f + m;
    } else if (dig === 5) {
        output = m;
    } else if (dig <= 8) {
        output = m;
        output += f.repeat(dig - 5);
    } else if (dig === 9) {
        output = f + l;
    }

    return output;
}

function numberConverter(number) {
    const numArr = number.toString().split('');
    let digIndex = numArr.length - 1;

    return numArr.reduce((acc, curr) => {
        return acc += digitConverter(parseInt(curr), digIndex--);
    }, '');
}


module.exports.digitConverter = digitConverter;
module.exports.numberConverter = numberConverter;

