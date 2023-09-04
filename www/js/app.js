document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    const calculatorForm = document.getElementById("interest-calculator");
    const resultadoElement = document.getElementById("resultado");

    const calcularButton = document.getElementById("calcular");

    calcularButton.addEventListener("click", function () {
        const principal = parseFloat(document.getElementById("principal").value);
        const taxa = parseFloat(document.getElementById("taxa").value);
        const tempo = parseFloat(document.getElementById("tempo").value);
        const jurosSimples = calcularJurosSimples(principal, taxa, tempo);

        const resultBox = document.querySelector(".result-box");
        const resultText = document.createElement("p");
        resultText.textContent = `O montante final é R$ ${jurosSimples.toFixed(2)}`;

        // Limpar o resultado anterior antes de exibir o novo
        while (resultadoElement.firstChild) {
            resultadoElement.removeChild(resultadoElement.firstChild);
        }

        resultadoElement.appendChild(resultText);
    });

    function calcularJurosSimples(principal, taxa, tempo) {
        const juros = (principal * taxa * tempo) / 100;
        return principal + juros;
    }
}


