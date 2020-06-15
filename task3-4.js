var names = ["Diego", "Gabriel", "Lucas"];

window.addEventListener('load', display);


function add() {

    const value = document.getElementById("value").value;
    names.push(value);

    display();

}

function display() {
    let output = "";

    names.forEach(function (x) {
        output += `<ul><li>${x}</li></ul>`
    });

    document.getElementById("values").innerHTML = output;

}