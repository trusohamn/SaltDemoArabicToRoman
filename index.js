function digitConverter(dig, digIndex) {
    let f, m, l;
    [f, m, l] = 'IVXLCDM'.split('').splice(digitIndex * 2 + 0, digitIndex * 2 + 3);

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

function numberConverter(number) { // 25
    const numStr = number.toString();
    let result = [];
    let digIndex = 0;
    for (let i = numStr.length - 1; i >= 0; i--) {
        let y = digitConverter(parseInt(numStr.charAt(i)), digIndex); // digitConverter(5,0) = 'V' ; dC(2,1)='II'
        result.unshift(y); // ['II', V']
        digIndex++;
    }
    return result.join('');
}


module.exports.digitConverter = digitConverter;
module.exports.numberConverter = numberConverter;

