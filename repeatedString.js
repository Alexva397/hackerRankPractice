function repeatedString(s, n) {
    // Write your code here
    const stringLength = s.length;
    const remainder = n % stringLength;
    const quotient =  (n - n % stringLength) / stringLength;
    let newString = [];
    for (let i = 0; i < quotient; i++) {
        newString.push(s)
    }
    const remS = s.slice(0,remainder);
    newString.push(remS)
    const joined = newString.join('');
    let count = 0;
    for (let j = 0; j < joined.length; j++) {
        if (joined[j] === 'a') count++;
    }
    return count;
}

repeatedString('abcac', 10);
repeatedString('abcaca', 20);
