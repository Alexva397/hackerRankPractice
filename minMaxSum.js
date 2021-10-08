




const minMaxSum = (arr) => {
    arr.sort((a, b) => a - b);

    console.log(arr)

    let minSum = 0;
    let maxSum = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        minSum += arr[i];
    }

    for (let i = 1; i < arr.length; i++) {
        maxSum += arr[i];
    }    

    console.log(minSum);
    console.log(maxSum);
}



minMaxSum([1, 5, 6, 3, 10, 22, 3])












