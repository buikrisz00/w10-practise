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

showMessageLater("message")
    .then(result => {
        console.log(result);
        
        showMessageLater("message3")
            .then(result => {
            console.log(result);

            showMessageLater("message4")
                .then(result => {
                console.log(result);
            })
        })
    })
    .catch(err => {
        console.log(err);
    })

