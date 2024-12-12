document.getElementById("form-contato").addEventListener("submit", function(e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
    } else {
        document.getElementById("feedback").innerHTML = "<p>Obrigado! Sua mensagem foi enviada com sucesso.</p>";
        document.getElementById("form-contato").reset();
    }
});
