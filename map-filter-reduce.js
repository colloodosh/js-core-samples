const todayBuyRate = [159.96, 157.67, 159.56, 154.65];

// Map
const mapResult = todayBuyRate.map((exchangeRate) => exchangeRate + 3).filter((z) => z > 161);
console.log(mapResult);


// Foreach - Doesn't return an array, it modifies the initial array

const foreachResult = todayBuyRate.forEach((rate) => rate + 4);
console.log('foreachResult -> ', foreachResult);

// Filter
const filteredRates = todayBuyRate.filter((exchangeRate) => exchangeRate > 155);
console.log(filteredRates);

// Reduce ( if initialValue is not assigned then value is 0 )

const sumRate = todayBuyRate.reduce((previousValue, currentValue) => {
    console.log('previousValue -> ' + previousValue, 'currentValue -> ' + currentValue);
    return previousValue + currentValue;
}, 0);

const weightedRate = todayBuyRate.reduce((previousValue, currentValue) => {
    console.log('previousValue -> ' + previousValue, 'currentValue -> ' + currentValue);
    return previousValue * currentValue
}, 1);

console.log(weightedRate);


let students = [{name: 'collins', marks: 80, rollNumber: 1}, {name: 'joy', marks: 69, rollNumber: 2}, {
    name: 'sam',
    marks: 35,
    rollNumber: 3
}, {name: 'jeffrey', marks: 55, rollNumber: 4},];

// Return the total marks for all the students
const totalMarks = students.map((z) => z.marks).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(totalMarks);

// Show names in uppercase
const studentUppercase = students.map((student) => student.name.toUpperCase());
console.log(studentUppercase);

// Returns name of students who have score over 60 marks
const studentsOverSixty = students.filter((student) => student.marks > 60).map((z) => z.name);
console.log(studentsOverSixty);

// Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60
const totalMarksLess60 = students.map((y) => (y.marks < 60) ? y.marks + 20 : y.marks)
    .filter((m) => m > 60)
    .reduce((prev, curr) => prev + curr, 0);
console.log(totalMarksLess60);