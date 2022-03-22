const arr1 = [2, 3, 5];
const arr2 = [40, 99, 50];

/* const arr3 = [...arr1].push(6); */
const arr3 = [...arr1];
arr3.push(6);

console.log(`arr1: `, arr1);
console.log(`arr3: `, arr3);

const arr4 = [...arr1, ...arr2];
console.log(`arr4: `, arr4);

const userProfile = {
    name: "SLSD",
    age: 25,
    country: "Hungary"
}

const userProfile2 = {...userProfile, gender: "Male", name: "Jaja"};

console.log(`userProfile: `, userProfile);
console.log(`userProfile2: `, userProfile2);