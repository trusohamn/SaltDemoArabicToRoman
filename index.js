function digitConverter(dig, digIndex) {
    let f, m, l;
    switch (digIndex) {
        case 0 : {
            f='I';
            m='V';
            l='X';
            break;
        }
        case 1 :{
            f='X';
            m='L';
            l='C';
            break;
        }
        case 2 :{
            f='C';
            m='D';
            l='M';
            break;
        }
        case 3 :{
            f='M';
            m='';
            l='';
            break;
        }
    }

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
