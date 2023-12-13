let clicado = null;

function setClicado(value) {
    localStorage.setItem('clicado', value);
}

function getClicado() {
    return localStorage.getItem('clicado');
}

function clicar(value) {
    clicado = value;
    let rateDiv = document.getElementById("rates");

    let inputs = rateDiv.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("clickClass");
    }
    let inputClicado = inputs[clicado - 1];
    inputClicado.classList.add("clickClass");

    setClicado(clicado);
}

function handleSubmit() {
    if (!clicado) {
        console.log("não foi clicado");
        return;
    }
    window.location.href = `thanks-page.html`;
}

document.addEventListener("DOMContentLoaded", function() {
    const clicadoFromStorage = getClicado();

    function atualizarParágrafo(grade) {
        var elementoRateResult = document.getElementById("rateResult");
        elementoRateResult.innerHTML = `<p>You selected ${grade} out of 5!</p>`;
    }    

    window.onload = function() {
        atualizarParágrafo(clicadoFromStorage);
    };
});






