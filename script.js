// COLE AQUI A SUA URL GERADA NO GOOGLE APPS SCRIPT
const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbzXHKStlymAprFXt-LIA8TCxvN_b5cNkG6MyzJfFGHtohDv8qqhUjRaUqtgLPuHWL664w/exec";

const form = document.getElementById("formulario");
const aviso = document.getElementById("aviso");
const btnEnviar = document.getElementById("btn-enviar");

form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    btnEnviar.textContent = "Enviando candidatura...";
    btnEnviar.disabled = true;
    
    aviso.textContent = "";
    aviso.className = "";

    fetch(URL_PLANILHA, {
        method: "POST",
        mode: "no-cors",
        body: new FormData(form)
    })
    .then(function() {
        aviso.textContent = "Candidatura enviada com sucesso!";
        aviso.className = "sucesso";
        form.reset();
    })
    .catch(function(error) {
        aviso.textContent = "Erro ao enviar. Verifique a conexão e tente novamente.";
        aviso.className = "erro";
    })
    .finally(function() {
        btnEnviar.textContent = "Enviar Candidatura";
        btnEnviar.disabled = false;
    });
});