

const stairs = (n) => {
    let final = '';

    for (let i = 0; i < n; i++) {
        for (let j = n - 1; j > i; j--) {
            final += ' ';
        }
        for (let x = 0; x <= i; x++) {
            final += '#';
        }
        final += '\n';
    }

    console.log(final);
}

stairs(5);