

const timeconversion = (time) => {
    const amPm = time.slice(8,10);
    
    const splitTime = time.slice(0,8).split(':');

    let hours = parseInt(splitTime[0]);

    if (hours === 12 && amPm === 'AM') {
        hours = '00';
    } else if (amPm === 'PM') {
        hours = hours + 12;
        hours.toString()
    }  else if (hours !== 12 && amPm === 'AM') {
        hours = '0' + hours
        hours.toString()
    } else {
        hours.toString()
    }
    
    

    const finalTime = `${hours}:${splitTime[1]}:${splitTime[2]}`;
    console.log(finalTime)
    return finalTime

}


timeconversion('10:10:07PM');

timeconversion('10:10:07AM');

timeconversion('12:10:07PM');
timeconversion('12:10:07AM');
timeconversion('12:45:54:PM');