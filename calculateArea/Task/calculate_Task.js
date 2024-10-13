let grocerys = [];
let id = ['grocery1', 'grocery2', 'grocery3'];

function calculateAmount() {
    let Amount = 0;
    for (let i = 0; i<=2; i++){
        grocerys[i] = parseFloat(document.getElementById(id[i]).value);
        Amount += grocerys[i];
    }

    document.getElementById('result').innerText = `The total amount is: $${Amount}`
}