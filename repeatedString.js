function repeatedString(s, n) {
    let aCount = 0;
    if (n > s.length) {
        for (const char of s) {
            if (char === "a") {
                aCount++;
            }
        }
    aCount = aCount * Math.floor(n / s.length);
    }

    for (let i = 0 ; i < n % s.length; i++) {
        if (s[i] === "a") {
            aCount++;
        }
    }
    console.log(aCount)
    return aCount;
}

repeatedString('abcac', 10);
repeatedString('abcaca', 20);
