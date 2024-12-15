document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

const campoA = parseFloat(document.getElementById('campoA').value);
const campoB = parseFloat(document.getElementById('campoB').value);
const messageDiv = document.getElementById('message');

if (campoB > campoA) {
    messageDiv.textContent = 'Formulário válido: O número B é maior que o número A.';
    messageDiv.className = 'message success';
    } else {
        messageDiv.textContent = 'Formulário inválido: O número B deve ser maior que o número A.';
        messageDiv.className = 'message error';
    }
});