const [min, max] = [5, 30];

/* if (min < max) {
    console.log("Min is lower than max!");
} else {
    console.log("Min is not lower than max!");
}

min < max ? console.log("Min is lower than max!") : console.log("Min is not lower than max!"); */

console.log(`Min is${min < max ? "" : " not"} lower than max!`);