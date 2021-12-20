

function stringManip(s) {
    let arr = s.split('')
    console.log(arr);
    let count = 0;
    let past = arr[0];
    arr = arr.filter((letter, index) => {
        if (letter !== past && index !== 0) {
            past = letter;
            return letter;
        }
    })
    count  = s.length - (arr.length + 1);
    console.log(count);
    return count;
}


stringManip('AAAA');
// stringManip('BBBBB');
// stringManip('ABABABAB');


