
function countingValleys(steps, path) {
    const arr = path.split("");
    let elevation = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "D") {
            elevation--;
        } else {
            if (elevation === -1) {
                elevation++;
                count++;
            } else if (elevation < -1 || elevation > -1) {
                elevation++;
            }
        }
    }
    return count;
}


countingValleys(8,"UDDDUDUU");    