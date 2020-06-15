var names = ["Diego", "Gabriel", "Lucas"];

window.addEventListener('load', display);


function add() {

    const value = document.getElementById("value").value;
    names.push(value);

    display();

}

function display() {
    let output = "";

    names.forEach(function (a) {
        output += `<ul><li>${a}</li></ul>`
    });

    document.getElementById("values").innerHTML = output;

}
