


const candles = (n, arr) => {
    const maxHeight = Math.max(...arr)
    let candleCount = 0;
    console.log(maxHeight)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === maxHeight) {
            ++candleCount;
        }
    }

    console.log(candleCount)
}

candles(6, [3, 1, 4, 4, 2, 1])