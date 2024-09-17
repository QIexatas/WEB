let nomeUsuário = "";
let elemento = document.querySelector("#palavra-negrito");

while(nomeUsuário == "")
{nomeUsuário = prompt("Qual é seu nome?");}

if(nomeUsuário == null) {elemento.textContent = "" ;} /* entre aspas pode ser uma frase se quiser */
else{elemento.textContent = nomeUsuário;}

