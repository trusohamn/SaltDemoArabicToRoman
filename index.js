function digitConverter(dig) {
    let output = '';
    if (dig <= 3) {
        output += 'I'.repeat(dig);
    } else if (dig === 4) {
        output = 'I' + 'V';
    } else if (dig === 5) {
        output = 'V';
    } else if (dig <= 8) {
        output = 'V';
        output += 'I'.repeat(dig - 5);
    } else if (dig === 9) {
        output = 'I' + 'X';
    }
    return output;
}
module.exports.digitConverter = digitConverter;
