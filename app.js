function processText() {
    var inputText = document.getElementById("inputText").value.toLowerCase();
    var mode = document.querySelector('input[name="mode"]:checked').value;

    if (mode === "encrypt") {
        var encryptedText = encryptText(inputText);
        document.getElementById("outputText").value = encryptedText;
    } else if (mode === "decrypt") {
        var decryptedText = decryptText(inputText);
        document.getElementById("outputText").value = decryptedText;
    }
}

function encryptText(text) {
    return text.replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/a/g, "ai")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}

function decryptText(text) {
    return text.replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ai/g, "a")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}

function copyToClipboard() {
    var outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
    alert("¡Texto copiado al portapapeles!");
}
