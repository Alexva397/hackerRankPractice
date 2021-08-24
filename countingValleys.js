
s = 8;
p = 'UDDDUDUU';

function countingValleys(steps, path) {
    let a = Array.from(path);
    let valleys=0;
    let pos=0;
    let prevpos=0;
    
    for(let i=0;i<a.length;i++){
    if(a[i]==='U'){
    prevpos=pos++;
    console.log('pos U:', pos)
    console.log('prevpos U:',a[i], prevpos)
    if(pos===0){
    valleys++;
    }
    }else{
        console.log('pos D B4:', pos)

    prevpos = pos--;
    console.log('pos D:', pos)
    console.log('prevpos D:',a[i], prevpos)
    console.log('valleys:', valleys)
    }
    }
    console.log(valleys)
    return valleys;
    
    }
    
countingValleys(s,p)    