const showMessageLater = msg => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (msg === "Hello") {
                return reject("Something happened");
            }
            return resolve(msg);
        }, 1000)
    });
}

let result;

const callFunction = async () => {
    try {
        result = await showMessageLater("Hello1");
        console.log(result);
        result = await showMessageLater("Hello2");
        console.log(result);
        result = await showMessageLater("Hello");
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

callFunction();