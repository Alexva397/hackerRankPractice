

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i)
        const isMultThree = (i * 3) % 3;
        const isMultFive = (i * 5) % 5;
        // console.log(isMultThree, isMultFive)
    }
}

fizzBuzz(15)