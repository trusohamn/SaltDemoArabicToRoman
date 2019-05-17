function digitConverter(dig) {
    let f = 'X'; //first
    let m = 'L'; //middle
    let l = 'D'; //last
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
module.exports.digitConverter = digitConverter;
