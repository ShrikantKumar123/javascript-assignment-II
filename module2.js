function checkAge(age) {
    return new Promise(function (resolve, reject) {

        if (age >= 18)
            resolve();
        else
            reject();

    });

}
checkAge(16)
    .then(function () {
        console.log("Older than 18");
    })
    .catch(function () {
        console.log("less than 18");
    });
