




const minMaxSum = (arr) => {
    arr.sort((a, b) => {
        if (a > b) return 1
        if (b > a) return -1
        return 0
    })
    console.log(arr)
    // arr.sort((a, b) => a - b);

    // let minSum = 0;
    // let maxSum = 0;

    // for (let i = 0; i < arr.length - 1; i++) {
    //     minSum += arr[i];
    // }

    // for (let i = 1; i < arr.length; i++) {
    //     maxSum += arr[i];
    // }    


    // console.log(`${minSum} ${maxSum}`);
    // return (`${minSum} ${maxSum}`)
}



minMaxSum([1, 543, 6, 3, 3, 555])












