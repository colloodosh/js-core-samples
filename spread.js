// Copy and replace required value for Objects

const customerDetails = {firstName: 'collins', age: 32, dob: '09-03-1991'};

console.log({...customerDetails, firstName: 'kevin'});

// Merge two objects

const customerDetailsA = {firstName: 'collins', age: 32, dob: '09-03-1991'};

console.log([...[customerDetailsA], {firstName: 'kevin', age: 32, dob: '09-03-1991'}]);

// Add values to an existing array

const customerDetailsArr = ['COLLINS', 30, ['09-03-1991', '22-02-1991']];

console.log([...customerDetailsArr, 32]);
