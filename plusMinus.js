function plusMinus(arr) {
    // Write your code here
    let pos = 0;
    let zero = 0;
    let neg = 0;
    const length = arr.length;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            pos++;
        } else if (arr[i] < 0) {
            neg++;
        } else {
            zero++;
        }
    }
    
    pos = pos / length;
    zero = zero / length;
    neg = neg / length;
    

    console.log(pos.toFixed(6));
    console.log(neg.toFixed(6));
    console.log(zero.toFixed(6));
    
    return pos, neg, zero;
    
}


plusMinus([-4,3,-9,0,4,1]);