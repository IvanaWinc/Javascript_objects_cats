let person = {
    name: 'Ivana',
    age: 33,
    evaluations: [7, 10, 9]
};

// Dot Notation
person.name = 'Ivana';

person['name'] = 'Ivi';

//console.log(person.evaluations);

let selectedColors = ['red', 'blue', 'green'];
selectedColors.push('yellow', 5, { greeting: "hi ik ben een object" })

console.log(selectedColors[5]);

