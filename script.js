document.getElementById('encrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    const encryptedText = encryptText(inputText);
    displayMessage(encryptedText);
    toggleCopyButton(true);
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    const decryptedText = decryptText(inputText);
    displayMessage(decryptedText);
    toggleCopyButton(true);
});

document.getElementById('copy-btn').addEventListener('click', function() {
    const outputMessage = document.getElementById('output-message').textContent;
    copyToClipboard(outputMessage);
});

function encryptText(text) {
    // Reglas de encriptación
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}

function decryptText(text) {
    // Reglas de desencriptación (en orden inverso)
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return decryptedText;
}

function displayMessage(message) {
    const outputMessage = document.getElementById('output-message');
    if (message) {
        outputMessage.textContent = message;
    } else {
        outputMessage.textContent = 'Ningún mensaje fue encontrado';
    }
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Texto copiado al portapapeles');
}

function toggleCopyButton(show) {
    const copyBtn = document.getElementById('copy-btn');
    if (show) {
        copyBtn.classList.remove('hidden');
    } else {
        copyBtn.classList.add('hidden');
    }
}