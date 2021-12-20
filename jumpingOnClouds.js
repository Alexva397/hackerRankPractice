
// const c = [0,0,1,0,1,0,1,0,0,0,1,0]; //6
// const c = [0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0]; //8
const c = [0,0,1,0,0,1,0];

const jumpingOnClouds = (c) => {

    // initiate current and jump count
    let current = 1;
    let jumps = 0;
    do {
        if (c[current + 2] === 0) {
            jumps++;
            current += 2;
        } else {
            jumps++;
            current++;
        }
    } while (current < c.length);
    console.log(jumps);
    return jumps;
}

jumpingOnClouds(c);