const altertenativa1 = document.getElementById("alternativa1");
const altertenativa2 = document.getElementById("alternativa2");
const altertenativa3 = document.getElementById("alternativa3");

import { forma_resposta } from './QuizSort.js';

const forma = (forma_resposta <= 3) ? "circulo" :
              (forma_resposta <= 6) ? "quadrado" :
              (forma_resposta <= 9) ? "triangulo" : "retangulo";

function verificar_resposta(x) {
    return function() {
        if (x.children[1].innerText === forma) {
            alert("Acertou!");
        } else {
            alert("Errou!");
        }
    }
}

altertenativa1.addEventListener("click", verificar_resposta(altertenativa1));
altertenativa2.addEventListener("click", verificar_resposta(altertenativa2));
altertenativa3.addEventListener("click", verificar_resposta(altertenativa3));