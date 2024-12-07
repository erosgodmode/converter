function convert(type) {
    const decimalInput = document.getElementById('decimalInput').value;
    let result = '';

    if (decimalInput === '') {
        result = 'Please enter a number!';
    } else {
        const number = parseInt(decimalInput, 10);

        switch (type) {
            case 'binary':
                result = `Binary: ${number.toString(2)}`;
                break;
            case 'octal':
                result = `Octal: ${number.toString(8)}`;
                break;
            case 'hex':
                result = `Hexadecimal: ${number.toString(16).toUpperCase()}`;
                break;
            default:
                result = 'Invalid conversion type!';
        }
    }

    document.getElementById('result').innerText = result;
}
