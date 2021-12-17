

const minBribes = (q) => {
    let bribecount = 0;
    let tooChaotic = false;

    // loop over each person
    for (let i = 0; i < q.length; i++) {
        // check IF val is less than index, if it is...
            // check value against index+1
            // if difference index - value > 2..
            let bribes = q[i] - (i + 1);
            
            // print too chaotic
            if (bribes > 2) {
                tooChaotic = true;
            } else {
                for (let j = 0; j < i; j++) {
                    if (q[j] > q[i]) {
                        bribecount++;
                    }
                }
            }
        
    }
    

    // check for too chaotic true, print message
    if (tooChaotic)
        console.log("Too chaotic");
    // if not, print min num of bribes
    else
        console.log(bribecount);

};



minBribes([1, 2, 3, 6, 5, 4, 7, 8]);

minBribes([1, 2, 5, 3, 7, 8, 6, 4]);