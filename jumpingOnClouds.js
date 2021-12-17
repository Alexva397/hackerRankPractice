
// const c = [0,0,1,0,1,0,1,0,0,0,1,0]; //6
// const c = [0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0]; //8
const c = [0,0,1,0,0,1,0];

const jumpingOnClouds = (c) => {
    let current = 0;
    let jumps = 0;
    do {
        if (c[current + 2] === 0) {
            jumps++;
            current += 2;
        } else {
            jumps++;
            current++;
        }
    } while (current < c.length - 1);
    return jumps;
}

jumpingOnClouds(c);