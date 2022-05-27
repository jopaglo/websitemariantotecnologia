
function enviarformulario() {
    //recebendo o valor do captcha
    captcha_data = document.getElementById('g-recaptcha-response').value;
    if (captcha_data == "") {
        alert('Para enviar o formumário é necessário o preenchimento do reCaptcha');
        return false;
    } else {
        alert('Sua mensagem foi enviada com sucesso e daremos retorno em breve!');
    }
}
