function codifica () {       
    let mensagem = document.getElementById("mensagem");
    let res = document.getElementById("resposta");
    let text = mensagem.value; 
    let letras = ['á', 'ã', 'à', 'â', 'é', 'ê', 'ó', 'ô', 'í', 'ú', 'A', 'Á', 'Ã', 'Â', 'B', 'C', 'D', 'E', 'É', 'Ê', 'F', 'G', 'H', 'I', 'Í', 'J', 'K', 'L', 'M', 'N', 'O', 'Ó', 'Ô', 'Õ', 'P', 'Q','R', 'S', 'T', 'U', 'Ú', 'V', 'W', 'X', 'Y', 'Z'];
    for(var i = 0; i < letras.length; i++) {
    if(text.match(letras[i])) {
        text.preventDefault(alert("Não é possivel utilizar acentuações e letras maiúsculas!"));
    }                                       
}               
    text = text.replace(new RegExp('[e]','gi'), 'enter');
    text = text.replace(new RegExp('[i]','gi'), 'imes');
    text = text.replace(new RegExp('[a]','gi'), 'ai');
    text = text.replace(new RegExp('[o]','gi'), 'ober');
    text = text.replace(new RegExp('[u]','gi'), 'ufat');
           
    res.innerHTML = `${text}`;
    res.style.backgroundImage = "none";
}

function decodifica () {       
    let mensagem = document.getElementById("mensagem");
    let res = document.getElementById("resposta");
    let text = mensagem.value;                                                          
    text = text.replace(new RegExp('enter','gi'), 'e');
    text = text.replace(new RegExp('imes','gi'), 'i');
    text = text.replace(new RegExp('ai','gi'), 'a');
    text = text.replace(new RegExp('ober','gi'), 'o');
    text = text.replace(new RegExp('ufat','gi'), 'u');
           
    res.innerHTML = `${text}`;
    res.style.backgroundImage = "none";
}

function copiar() {
    let copia = document.getElementById("resposta");
    let res = document.getElementById("resposta");
    copia.select();
    navigator.clipboard.writeText(copia.innerHTML)
    alert("Arquivo copiado com sucesso!")
    res.innerHTML = " ";
}
