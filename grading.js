

const grading = (grades) => {
    let studentCount = grades.shift();

    for (let i = 0; i < studentCount; i++) {
        console.log(grades[i]);
        
    }
}

grading([7, 38, 24, 88, 87, 99, 71, 74]);