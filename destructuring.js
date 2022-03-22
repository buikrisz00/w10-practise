const userProfile = {
    name: "SLSD",
    age: 25,
    country: "Hungary"
};
/* const name = userProfile.name;
const age = userProfile.age; */

/* const {name, age} = userProfile;      Ez a destructuring
console.log("name: ", name);
console.log("age: ", age); */


const logNameAndAge = ({name, age}) => {
    console.log("name: ", name);
    console.log("age: ", age);
}

logNameAndAge(userProfile)

const arr1 = [1, 8, 9, 50];
/*const first = arr1[0];
const second = arr1[1];

console.log("first: ", first);
console.log("second: ", second); */

const [a, b] = arr1;
console.log("a: ", a);
console.log("b: ", b);

const [x, ...y] = arr1;
console.log("x: ", x);
console.log("y: ", y);